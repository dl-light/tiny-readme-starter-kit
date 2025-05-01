
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

// Add other types as needed
