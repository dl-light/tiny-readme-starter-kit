
// Add or update the existing types file
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface User extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  teamId: string;
  bio?: string;
}

export interface AuthResponse {
  user: User;
  token?: string;
}

export interface Team extends BaseEntity {
  name: string;
  description?: string;
}

export interface Discussion extends BaseEntity {
  title: string;
  body: string;
  authorId: string;
}

export interface Comment extends BaseEntity {
  body: string;
  authorId: string;
  discussionId: string;
}

// Add MutationConfig type to fix import errors
export type MutationConfig<TData, TError, TVariables> = {
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: TError, variables: TVariables) => void;
  onSettled?: (data: TData | undefined, error: TError | undefined, variables: TVariables) => void;
};

// Add FieldError type to resolve form errors
export interface FieldError {
  type: string;
  message: string;
}
