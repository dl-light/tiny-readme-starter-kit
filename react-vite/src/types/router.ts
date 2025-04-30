
import { ReactNode } from 'react';

export interface RouteProps {
  path: string;
  element: ReactNode;
  children?: RouteProps[];
  errorElement?: ReactNode;
}

