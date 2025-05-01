
export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

// Export the MutationConfig type for consistency
export type MutationConfig<TData, TError, TVariables> = {
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: TError, variables: TVariables) => void;
  onSettled?: (data: TData | undefined, error: TError | undefined, variables: TVariables) => void;
};
