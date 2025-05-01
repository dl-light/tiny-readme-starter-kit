
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { z } from 'zod';

import { paths } from '@/config/paths';
import { User } from '@/types/api';

// Type for user data - using the User from types/api.ts
// Mock user data
const mockUser: User = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  role: 'ADMIN',
  teamId: '1',
  bio: 'Software developer with a passion for React',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// Simplified auth hooks
export const useUser = () => {
  return {
    data: mockUser,
    isLoading: false,
    error: null,
    user: mockUser, // Adding user property to fix authorization.tsx error
    refetch: () => Promise.resolve({ data: mockUser }) // Adding refetch method
  };
};

export const useLogin = (options?: any) => {
  return {
    mutate: (data: any) => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    isPending: false,
    error: null,
  };
};

export const useLogout = (options?: any) => {
  return {
    mutate: (data: any) => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    isPending: false,
    error: null,
  };
};

export const useRegister = (options?: any) => {
  return {
    mutate: (data: any) => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    isPending: false,
    error: null,
  };
};

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(5, 'Required'),
});

export const registerInputSchema = z.object({
  email: z.string().min(1, 'Required'),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  password: z.string().min(5, 'Required'),
  teamId: z.string().optional(),
  teamName: z.string().optional(),
});

// Simplified AuthLoader component
export const AuthLoader = ({ children, renderLoading }: { children: React.ReactNode, renderLoading: () => React.ReactNode }) => {
  return <>{children}</>;
};

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
