
import * as React from 'react';

import { useUser } from './auth';

export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
} & (
  | {
      allowedRoles: ROLES[];
    }
  | {
      condition: boolean;
    }
);

export const useAuthorization = () => {
  const { user } = useUser();

  const checkAccess = React.useCallback(
    ({ allowedRoles }: { allowedRoles: ROLES[] }) => {
      if (!user) return false;

      return allowedRoles.includes(user.role as ROLES);
    },
    [user],
  );

  return { checkAccess };
};

export const Authorization = ({
  children,
  forbiddenFallback = null,
  ...props
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization();

  let canAccess = false;

  if ('allowedRoles' in props) {
    canAccess = checkAccess({ allowedRoles: props.allowedRoles });
  }

  if ('condition' in props) {
    canAccess = props.condition;
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
};
