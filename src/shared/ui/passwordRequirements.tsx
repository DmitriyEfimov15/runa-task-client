import { FC } from "react";
import clsx from "clsx";
import { CheckCircle2, Circle } from "lucide-react";
import { passwordRequirements } from "../lib/validators/passwordRequrements";

type Props = {
  value: string;
};

const PasswordRequirements: FC<Props> = ({ value }) => {
  const isVisible = value?.length > 0;

  return (
    <div
      className={clsx(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isVisible ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0",
      )}
    >
      <ul className="space-y-1 text-sm">
        {passwordRequirements.map((req) => {
          const isValid = req.test(value);

          return (
            <li
              key={req.key}
              className={clsx(
                "flex items-center gap-2 transition-colors",
                isValid ? "text-green-600" : "text-gray-400",
              )}
            >
              {isValid ? <CheckCircle2 size={16} /> : <Circle size={16} />}
              <span>{req.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordRequirements;
