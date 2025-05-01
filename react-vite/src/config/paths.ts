
type Path<T extends Record<string, any>> = {
  path: string;
  getHref: (...args: any[]) => string;
} & T;

export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  } satisfies Path<{}>,
  auth: {
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string) =>
        redirectTo ? `/auth/login?redirectTo=${redirectTo}` : '/auth/login',
    } satisfies Path<{}>,
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string) =>
        redirectTo
          ? `/auth/register?redirectTo=${redirectTo}`
          : '/auth/register',
    } satisfies Path<{}>,
  },
  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    } satisfies Path<{}>,
    dashboard: {
      path: '/app/dashboard',
      getHref: () => '/app/dashboard',
    } satisfies Path<{}>,
    discussions: {
      path: '/app/discussions',
      getHref: () => '/app/discussions',
    } satisfies Path<{}>,
    discussion: {
      path: '/app/discussions/:discussionId',
      getHref: (discussionId: string) => `/app/discussions/${discussionId}`,
    } satisfies Path<{}>,
    users: {
      path: '/app/users',
      getHref: () => '/app/users',
    } satisfies Path<{}>,
    profile: {
      path: '/app/profile',
      getHref: () => '/app/profile',
    } satisfies Path<{}>,
  },
};
