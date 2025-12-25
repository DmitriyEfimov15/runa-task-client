import { FC } from "react";

const FormError: FC<{ message: string }> = ({ message }) => {
  return (
    <span className="text-sm text-red-600">
      {message}
    </span>
  );
}

export default FormError;