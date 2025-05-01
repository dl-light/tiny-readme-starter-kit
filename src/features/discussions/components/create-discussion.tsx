
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormDrawer, Input, Textarea } from '@/components/ui/form';
import { useNotifications } from '@/components/ui/notifications';
import { ROLES } from '@/lib/authorization';

import { createDiscussion } from '../api/create-discussion';

const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

type FormData = z.infer<typeof schema>;

export const CreateDiscussion = () => {
  const notifications = useNotifications();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const createDiscussionMutation = createDiscussion();

  const onSubmit = async (data: FormData) => {
    await createDiscussionMutation.mutateAsync(data);
    notifications.showNotification({
      type: 'success',
      title: 'Success',
      duration: 5000,
      message: `Discussion Created`,
    });
  };

  return (
    <FormDrawer
      isDone={createDiscussionMutation.isSuccess}
      triggerButton={{
        label: 'Create Discussion',
        icon: 'add',
      }}
      title="Create Discussion"
      submitButton={{
        label: 'Submit',
        loading: createDiscussionMutation.isPending,
        loadingText: 'Submitting...',
      }}
      formProps={{
        onSubmit,
        form,
      }}
    >
      <div className="space-y-4">
        <Form.Field
          label="Title"
          error={form.formState.errors['title']}
          inputId="title"
        >
          <Input {...form.register('title')} />
        </Form.Field>
        <Form.Field
          label="Body"
          error={form.formState.errors['body']}
          inputId="body"
        >
          <Textarea {...form.register('body')} />
        </Form.Field>
      </div>
    </FormDrawer>
  );
};
