
/// <reference types="vite/client" />
import { ComponentType, ReactElement } from 'react';

declare global {
  interface ImportMeta {
    readonly env: Record<string, string>;
  }
}

declare module 'react-router' {
  interface LazyRouteFunction<T> {
    (): Promise<{ default: ComponentType<T> }>;
  }
}

declare module 'react-router/dom' {
  export interface RouterProviderProps {
    router: any;
    fallbackElement?: ReactElement;
  }
}

