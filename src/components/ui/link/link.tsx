
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { cn } from '@/utils/cn';

export type LinkProps = React.ComponentPropsWithoutRef<typeof RouterLink> & {
  href?: string;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, href, ...props }, ref) => {
    return (
      <RouterLink
        ref={ref}
        to={href || props.to || '#'}
        className={cn('text-primary hover:opacity-80 focus:outline-none', className)}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';
