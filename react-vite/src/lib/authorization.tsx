
import * as React from 'react';

import { useUser } from './auth';

export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const POLICIES = {
  'comment:delete': (user: any, comment: any) => {
    if (user?.role === ROLES.ADMIN) return true;
    if (user?.id === comment.authorId) return true;
    return false;
  }
};

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
  | {
      policyCheck: boolean;
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

  if ('policyCheck' in props) {
    canAccess = props.policyCheck;
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
};
