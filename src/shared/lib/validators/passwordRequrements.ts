import { PasswordRequirement } from "./types";

export const passwordRequirements: PasswordRequirement[] = [
  {
    key: "length",
    label: "Минимум 6 символов",
    test: (v) => v?.length >= 6,
  },
  {
    key: "uppercase",
    label: "Хотя бы одна заглавная буква",
    test: (v) => /[A-Z]/.test(v),
  },
  {
    key: "lowercase",
    label: "Хотя бы одна строчная буква",
    test: (v) => /[a-z]/.test(v),
  },
  {
    key: "number",
    label: "Хотя бы одна цифра",
    test: (v) => /\d/.test(v),
  },
  {
    key: "symbol",
    label: "Хотя бы один спецсимвол",
    test: (v) => /[^\w\s]/.test(v),
  },
];
