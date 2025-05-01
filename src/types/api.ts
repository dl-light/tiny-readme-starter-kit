// Add or update the existing types file
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  teamId: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token?: string;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

// Add other types as needed
