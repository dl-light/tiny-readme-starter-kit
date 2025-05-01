
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';

import { getUsersQueryOptions } from './get-users';

export const deleteUser = ({ userId }: { userId: string }): Promise<void> => {
  return api.delete(`/users/${userId}`);
};

type UseDeleteUserOptions = {
  mutationConfig?: MutationConfig<void, unknown, { userId: string }>;
};

export const useDeleteUser = ({ mutationConfig }: UseDeleteUserOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(getUsersQueryOptions());
      onSuccess?.(data, variables);
    },
    ...restConfig,
    mutationFn: deleteUser,
  });
};
