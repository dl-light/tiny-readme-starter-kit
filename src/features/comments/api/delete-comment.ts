
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';

import { getInfiniteCommentsQueryOptions } from './get-comments';

export const deleteComment = ({ commentId }: { commentId: string }): Promise<void> => {
  return api.delete(`/comments/${commentId}`);
};

type UseDeleteCommentOptions = {
  discussionId: string;
  mutationConfig?: MutationConfig<void, unknown, { commentId: string }>;
};

export const useDeleteComment = ({
  mutationConfig,
  discussionId,
}: UseDeleteCommentOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: getInfiniteCommentsQueryOptions(discussionId).queryKey,
      });
      onSuccess?.(data, variables);
    },
    ...restConfig,
    mutationFn: deleteComment,
  });
};
