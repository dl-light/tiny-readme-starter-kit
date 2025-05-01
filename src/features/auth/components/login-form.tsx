
import { Link, useSearchParams } from 'react-router-dom';
import { Mail, Key, LogIn } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { paths } from '@/config/paths';
import { useLogin, loginInputSchema } from '@/lib/auth';
import { FieldError } from '@/types/api';

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({
    onSuccess,
  });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <div className="space-y-6">
      <Form
        onSubmit={(values) => {
          login.mutate(values);
        }}
        schema={loginInputSchema}
      >
        {({ register, formState }) => (
          <div className="space-y-5">
            <Input
              type="email"
              label="Email Address"
              error={formState.errors['email'] as FieldError | undefined}
              registration={register('email')}
              icon={<Mail className="text-blue-500" size={18} />}
              placeholder="your.email@example.com"
              className="bg-gray-50 focus:border-blue-500"
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors['password'] as FieldError | undefined}
              registration={register('password')}
              icon={<Key className="text-blue-500" size={18} />}
              placeholder="••••••••"
              className="bg-gray-50 focus:border-blue-500"
            />
            <div>
              <Button
                isLoading={login.isPending}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 transition-colors"
                icon={<LogIn size={18} />}
              >
                Log in
              </Button>
            </div>
          </div>
        )}
      </Form>
      <div className="mt-4 text-center">
        <Link
          to={paths.auth.register.getHref(redirectTo || undefined)}
          className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
        >
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};
