
import * as React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Mail, User, Key, UserPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form, Input, Select, Label, Switch } from '@/components/ui/form';
import { paths } from '@/config/paths';
import { useRegister, registerInputSchema } from '@/lib/auth';
import { FieldError, Team } from '@/types/api';

type RegisterFormProps = {
  onSuccess: () => void;
  chooseTeam: boolean;
  setChooseTeam: () => void;
  teams?: Team[];
};

export const RegisterForm = ({
  onSuccess,
  chooseTeam,
  setChooseTeam,
  teams,
}: RegisterFormProps) => {
  const registering = useRegister({ onSuccess });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <div className="space-y-6">
      <Form
        onSubmit={(values) => {
          registering.mutate(values);
        }}
        schema={registerInputSchema}
        options={{
          shouldUnregister: true,
        }}
      >
        {({ register, formState }) => (
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                type="text"
                label="First Name"
                error={formState.errors['firstName'] as FieldError | undefined}
                registration={register('firstName')}
                icon={<User className="text-gray-400" size={18} />}
                placeholder="John"
                className="bg-gray-50"
              />
              <Input
                type="text"
                label="Last Name"
                error={formState.errors['lastName'] as FieldError | undefined}
                registration={register('lastName')}
                icon={<User className="text-gray-400" size={18} />}
                placeholder="Doe"
                className="bg-gray-50"
              />
            </div>
            <Input
              type="email"
              label="Email Address"
              error={formState.errors['email'] as FieldError | undefined}
              registration={register('email')}
              icon={<Mail className="text-gray-400" size={18} />}
              placeholder="your.email@example.com"
              className="bg-gray-50"
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors['password'] as FieldError | undefined}
              registration={register('password')}
              icon={<Key className="text-gray-400" size={18} />}
              placeholder="••••••••"
              className="bg-gray-50"
            />

            <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-50">
              <Switch
                checked={chooseTeam}
                onCheckedChange={setChooseTeam}
                className={`${
                  chooseTeam ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                id="choose-team"
              />
              <Label htmlFor="choose-team" className="cursor-pointer">Join Existing Team</Label>
            </div>

            {chooseTeam && teams ? (
              <Select
                label="Team"
                error={formState.errors['teamId'] as FieldError | undefined}
                registration={register('teamId')}
                options={teams?.map((team) => ({
                  label: team.name,
                  value: team.id,
                }))}
                className="bg-gray-50"
              />
            ) : (
              <Input
                type="text"
                label="Team Name"
                error={formState.errors['teamName'] as FieldError | undefined}
                registration={register('teamName')}
                placeholder="Your Team"
                className="bg-gray-50"
              />
            )}
            <div>
              <Button
                isLoading={registering.isPending}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2.5"
                icon={<UserPlus size={18} />}
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </Form>
      <div className="mt-4 flex items-center justify-end">
        <div className="text-sm">
          <Link
            to={paths.auth.login.getHref(redirectTo || undefined)}
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </div>
  );
};
