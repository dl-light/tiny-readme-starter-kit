
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form, FormDrawer, Textarea } from '@/components/ui/form';
import { useNotifications } from '@/components/ui/notifications';
import { FieldError } from '@/types/api';

import { 
  createCommentInputSchema, 
  useCreateComment 
} from '../api/create-comment';

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
    <FormDrawer
      isDone={createCommentMutation.isSuccess}
      triggerButton={
        <Button icon={<Plus className="size-4" />} size="sm">
          Create Comment
        </Button>
      }
      title="Create Comment"
      submitButton={
        <Button
          form="create-comment"
          type="submit"
          size="sm"
          isLoading={createCommentMutation.isPending}
        >
          Submit
        </Button>
      }
    >
      <Form
        id="create-comment"
        onSubmit={(values) => {
          createCommentMutation.mutate({
            data: {
              body: values.body,
              discussionId,
            },
          });
        }}
        schema={createCommentInputSchema.pick({ body: true })}
      >
        {({ register, formState }) => (
          <Textarea
            label="Comment"
            error={formState.errors['body'] as FieldError | undefined}
            registration={register('body')}
          />
        )}
      </Form>
    </FormDrawer>
  );
};
