
export const getDiscussionsQueryOptions = ({ page }: { page: number }) => ({
  queryKey: ['discussions', { page }],
  queryFn: async () => ({ data: [] }),
});
