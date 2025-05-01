
import { Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ConfirmationDialog } from '@/components/ui/dialog';
import { useNotifications } from '@/components/ui/notifications';
import { paths } from '@/config/paths';
import { ROLES } from '@/lib/authorization';

import { useDeleteUser } from '../api/delete-user';

type DeleteUserProps = {
  id: string;
  isCurrentUser?: boolean;
  userRole?: string;
};

export const DeleteUser = ({
  id,
  isCurrentUser = false,
  userRole,
}: DeleteUserProps) => {
  const navigate = useNavigate();
  const { addNotification } = useNotifications();
  const deleteUserMutation = useDeleteUser({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'User Deleted',
        });
        if (isCurrentUser) {
          navigate(paths.auth.login.getHref());
        }
      },
    },
  });

  if (userRole === ROLES.ADMIN) return null;

  return (
    <ConfirmationDialog
      icon="danger"
      title="Delete User"
      body="Are you sure you want to delete this user?"
      triggerButton={
        <Button variant="destructive" icon={<Trash className="size-4" />}>
          Delete User
        </Button>
      }
      confirmButton={
        <Button
          isLoading={deleteUserMutation.isPending}
          type="button"
          variant="destructive"
          onClick={() => deleteUserMutation.mutate({ userId: id })}
        >
          Delete User
        </Button>
      }
    />
  );
};
