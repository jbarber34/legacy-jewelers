import { zodResolver } from '@hookform/resolvers/zod';
import { ComponentProps } from 'react';
import { useForm, UseFormProps, FormProvider, UseFormReturn, FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { ZodSchema, TypeOf } from 'zod';

interface UseZodFormProps<T extends ZodSchema<any>> extends UseFormProps<TypeOf<T>> {
  schema: T;
}

export const useZodForm = <T extends ZodSchema<any>>({ schema, ...formConfig }: UseZodFormProps<T>) => {
  return useForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
};

interface FieldErrorProps {
  name?: string;
  message?: string;
}

export function FieldError({ name, message }: FieldErrorProps) {
  const {
    formState: { errors },
  } = useFormContext();

  // Object.keys(errors).length > 1 ? console.log(errors) : null;
  console.log(errors);

  if (!name) return null;

  const error = resolvePath(errors, name);

  if (!error) return null;

  // @ts-ignore
  return <div className='text-sm text-red-500 font-bold'>{message ? message : error.message}</div>;
}

interface Props<T extends FieldValues = any> extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const Form = <T extends FieldValues>({ form, onSubmit, children, ...props }: Props<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <fieldset className='flex flex-col space-y-4' disabled={form.formState.isSubmitting}>
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};

const resolvePath = (object: any, path: string) => path.split('.').reduce((o, p) => o?.[p], object);
