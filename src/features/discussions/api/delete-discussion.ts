
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';

import { getDiscussionsQueryOptions } from './get-discussions';

export const deleteDiscussion = ({
  discussionId,
}: {
  discussionId: string;
}): Promise<void> => {
  return api.delete(`/discussions/${discussionId}`);
};

type UseDeleteDiscussionOptions = {
  mutationConfig?: MutationConfig<void, unknown, { discussionId: string }>;
};

export const useDeleteDiscussion = ({
  mutationConfig,
}: UseDeleteDiscussionOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: getDiscussionsQueryOptions().queryKey,
      });
      onSuccess?.(_, variables);
    },
    ...restConfig,
    mutationFn: deleteDiscussion,
  });
};
