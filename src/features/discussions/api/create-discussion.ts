
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { Discussion } from '@/types/api';

import { getDiscussionsQueryOptions } from './get-discussions';

export const createDiscussionSchema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

export type CreateDiscussionDTO = z.infer<typeof createDiscussionSchema>;

export const createDiscussion = ({
  data,
}: {
  data: CreateDiscussionDTO;
}): Promise<Discussion> => {
  return api.post('/discussions', data);
};

type UseCreateDiscussionOptions = {
  mutationConfig?: MutationConfig<Discussion, unknown, { data: CreateDiscussionDTO }>;
};

export const useCreateDiscussion = ({ mutationConfig }: UseCreateDiscussionOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: getDiscussionsQueryOptions({ page: 1 }).queryKey });
      onSuccess?.(data, variables);
    },
    ...restConfig,
    mutationFn: createDiscussion,
  });
};
