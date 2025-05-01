
export const getUsersQueryOptions = () => ({
  queryKey: ['users'],
  queryFn: async () => ({ data: [] }),
});
