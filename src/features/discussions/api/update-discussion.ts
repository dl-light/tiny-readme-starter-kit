
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { Discussion } from '@/types/api';

import { getDiscussionQueryOptions } from './get-discussion';
import { getDiscussionsQueryOptions } from './get-discussions';

export const updateDiscussionInputSchema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

export type UpdateDiscussionInput = z.infer<typeof updateDiscussionInputSchema>;

export const updateDiscussion = ({
  data,
  discussionId,
}: {
  data: UpdateDiscussionInput;
  discussionId: string;
}): Promise<Discussion> => {
  return api.patch(`/discussions/${discussionId}`, data);
};

type UseUpdateDiscussionOptions = {
  mutationConfig?: MutationConfig<
    Discussion, 
    unknown, 
    { data: UpdateDiscussionInput; discussionId: string }
  >;
};

export const useUpdateDiscussion = ({
  mutationConfig,
}: UseUpdateDiscussionOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, { discussionId }) => {
      queryClient.invalidateQueries({ queryKey: getDiscussionsQueryOptions().queryKey });
      queryClient.invalidateQueries({
        queryKey: getDiscussionQueryOptions(discussionId).queryKey,
      });
      onSuccess?.(data, { data: { title: data.title, body: data.body }, discussionId });
    },
    ...restConfig,
    mutationFn: updateDiscussion,
  });
};
