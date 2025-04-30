
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { cn } from '@/utils/cn';

export interface LinkProps extends RouterLinkProps {
  className?: string;
}

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink className={cn('text-blue-600 hover:text-blue-800', className)} {...props}>
      {children}
    </RouterLink>
  );
};

