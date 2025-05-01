
import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { cn } from '@/utils/cn';

export type LinkProps = {
  className?: string;
  children: React.ReactNode;
} & RouterLinkProps;

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink
      className={cn('text-blue-600 hover:text-blue-800 hover:underline', className)}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
