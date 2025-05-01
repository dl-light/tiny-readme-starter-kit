
export const getInfiniteCommentsQueryOptions = (discussionId: string) => ({
  queryKey: ['comments', discussionId],
  queryFn: async () => ({ data: [] }),
});
