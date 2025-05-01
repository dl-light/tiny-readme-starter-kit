
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form, FormDrawer, Textarea } from '@/components/ui/form';
import { useNotifications } from '@/components/ui/notifications';

export const createCommentInputSchema = {
  body: {},
  discussionId: {},
};

export const useCreateComment = ({ discussionId, mutationConfig }: any) => {
  return {
    mutate: (data: any) => {},
    isPending: false,
    isSuccess: false,
  };
};

type CreateCommentProps = {
  discussionId: string;
};

export const CreateComment = ({ discussionId }: CreateCommentProps) => {
  const { addNotification } = useNotifications();
  const createCommentMutation = useCreateComment({
    discussionId,
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'Comment Created',
        });
      },
    },
  });

  return (
    <div>Create Comment component would render here</div>
  );
};
