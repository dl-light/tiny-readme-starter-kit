
export const useDiscussion = ({ discussionId }: { discussionId: string }) => {
  return {
    data: { data: { title: 'Sample Discussion' } },
    isLoading: false,
  };
};

export const getDiscussionQueryOptions = (discussionId: string) => ({
  queryKey: ['discussion', discussionId],
  queryFn: async () => ({ data: { title: 'Sample Discussion' } }),
});
