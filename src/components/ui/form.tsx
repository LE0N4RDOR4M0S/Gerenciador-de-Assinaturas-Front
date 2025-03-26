import { ReactNode } from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface FormProps {
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ children, onSubmit }: FormProps) {
  return <form>{children}</form>;
}

export default Form;

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  children: (field: { value: any; onChange: (value: any) => void }) => ReactNode;
}

export function FormField<T extends FieldValues>({ control, name, children }: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <div className="space-y-2">{children(field)}</div>}
    />
  );
}

interface FormItemProps {
  children: ReactNode;
}

export function FormItem({ children }: FormItemProps) {
  return <div className="flex flex-col space-y-1">{children}</div>;
}

interface FormLabelProps {
  children: ReactNode;
}

export function FormLabel({ children }: FormLabelProps) {
  return <label className="text-sm font-medium text-gray-700">{children}</label>;
}

interface FormControlProps {
  children: ReactNode;
}

export function FormControl({ children }: FormControlProps) {
  return <div className="mt-1">{children}</div>;
}

interface FormMessageProps {
  message?: string;
}

export function FormMessage({ message }: FormMessageProps) {
  return message ? <p className="text-sm text-red-600">{message}</p> : null;
}
