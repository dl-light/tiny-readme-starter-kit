
import { QueryClientConfig } from '@tanstack/react-query';

export const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};
