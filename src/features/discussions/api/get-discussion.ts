
export const useDiscussion = ({ discussionId }: { discussionId: string }) => {
  return {
    data: { data: { title: 'Sample Discussion', body: 'Sample body content' } },
    isLoading: false,
  };
};

export const getDiscussionQueryOptions = (discussionId: string) => ({
  queryKey: ['discussion', discussionId],
  queryFn: async () => ({ data: { title: 'Sample Discussion', body: 'Sample body content' } }),
});
