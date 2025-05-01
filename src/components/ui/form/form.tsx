
import * as React from 'react';
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  className?: string;
  schema?: any;
};

export const Form = <
  TFormValues extends FieldValues = FieldValues
>({
  onSubmit,
  children,
  options,
  id,
  className,
  schema,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema ? zodResolver(schema) : undefined,
  });
  return (
    <form
      className={className}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
