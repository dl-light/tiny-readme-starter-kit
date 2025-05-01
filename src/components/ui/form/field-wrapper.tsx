
import * as React from 'react';
import { type FieldError as RHFFieldError } from 'react-hook-form';

import { Error } from './error';
import { Label } from './label';

// Extended FieldError type to ensure compatibility
export type FieldError = RHFFieldError & {
  type: string;
};

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, children } = props;
  return (
    <div>
      <Label>
        <span className="mb-1.5 block font-medium text-gray-700">{label}</span>
        <div>{children}</div>
      </Label>
      {error && <Error errorMessage={error?.message} />}
    </div>
  );
};
