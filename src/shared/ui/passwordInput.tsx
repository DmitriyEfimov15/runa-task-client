'use client'

import { Input } from "@/src/shared/ui/input";
import { FC, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../lib/utils";

export const PasswordInput: FC<React.ComponentProps<"input">> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-full">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", props.className)}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 right-2 flex items-center justify-center cursor-pointer"
        tabIndex={-1}
      >
        {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
      </button>
    </div>
  );
};
