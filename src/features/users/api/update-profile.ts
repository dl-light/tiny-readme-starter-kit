
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import { useUser } from '@/lib/auth';
import { MutationConfig } from '@/lib/react-query';
import { User } from '@/types/api';

export const updateProfileSchema = z.object({
  email: z.string().optional(),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  bio: z.string().optional(),
});

export type UpdateProfileDTO = z.infer<typeof updateProfileSchema>;

export const updateProfile = (data: UpdateProfileDTO): Promise<User> => {
  return api.patch('/auth/profile', data);
};

type UseUpdateProfileOptions = {
  mutationConfig?: MutationConfig<User, unknown, UpdateProfileDTO>;
};

export const useUpdateProfile = ({ mutationConfig }: UseUpdateProfileOptions = {}) => {
  const { refetch } = useUser();
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['auth-user'],
      });
      refetch();
      onSuccess?.(data, variables);
    },
    ...restConfig,
    mutationFn: updateProfile,
  });
};
