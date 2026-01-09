import { passwordRequirements } from "./passwordRequrements";

export const passwordRules = {
  required: "Это обязательное поле",
  validate: (value: string) => {
    const failed = passwordRequirements.find((req) => !req.test(value));

    return failed ? failed.label : true;
  },
};
