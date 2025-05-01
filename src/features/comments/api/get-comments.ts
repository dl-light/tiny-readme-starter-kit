
// Fix for the infinite query options

export const getCommentsQueryOptions = (discussionId: string) => ({
  queryKey: ['comments', discussionId],
  queryFn: async () => {
    // Mock implementation
    return { data: [] };
  },
});

export const getInfiniteCommentsQueryOptions = (discussionId: string) => ({
  queryKey: ['comments', discussionId, 'infinite'],
  queryFn: async () => {
    // Mock implementation
    return { data: [] };
  },
  initialPageParam: 0,
  getNextPageParam: () => null,
});
