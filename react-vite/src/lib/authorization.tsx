
import React, { createContext, useContext } from 'react';

export const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};

type AuthorizationContextType = {
  checkAccess: (params: { allowedRoles: string[] }) => boolean;
};

const AuthorizationContext = createContext<AuthorizationContextType | null>(null);

export const useAuthorization = () => {
  const context = useContext(AuthorizationContext);
  if (!context) {
    throw new Error('useAuthorization must be used within AuthorizationProvider');
  }
  return context;
};

export const AuthorizationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const checkAccess = ({ allowedRoles }: { allowedRoles: string[] }) => {
    // In a real app, this would check the user's role against allowedRoles
    return true;
  };

  return (
    <AuthorizationContext.Provider value={{ checkAccess }}>
      {children}
    </AuthorizationContext.Provider>
  );
};
