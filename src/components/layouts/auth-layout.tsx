
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import { Head } from '@/components/seo';
import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({ children, title }: LayoutProps) => {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const navigate = useNavigate();

  useEffect(() => {
    if (user.data) {
      navigate(redirectTo ? redirectTo : paths.app.dashboard.getHref(), {
        replace: true,
      });
    }
  }, [user.data, navigate, redirectTo]);

  return (
    <>
      <Head title={title} />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center justify-center">
            <Link
              className="flex items-center text-white"
              to={paths.home.getHref()}
            >
              <img className="h-20 w-auto drop-shadow-lg" src={logo} alt="Logo" />
            </Link>

            <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900">
              {title}
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
            <div className="px-6 py-8 sm:px-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
