import { cloneElement, FC, isValidElement, ReactNode, ReactElement } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "../lib/utils";
import FormError from "./formError";

interface FormFieldProps {
  children: ReactNode;
  error?: FieldError;
}

type ElementWithClassName = {
  className?: string;
};

export const FormField: FC<FormFieldProps> = ({ children, error }) => {
  let childWithClass = children;

  if (isValidElement(children)) {
    const childElement = children as ReactElement<ElementWithClassName>;

    childWithClass = cloneElement(childElement, {
      className: cn(childElement.props.className, error && "border-red-500"),
    });
  }

  return (
    <div className="flex flex-col">
      {childWithClass}
      {error && <FormError message={error.message || "Ошибка в поле"} />}
    </div>
  );
};
