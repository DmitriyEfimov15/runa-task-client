export type PasswordRequirement = {
  key: string;
  label: string;
  test: (value: string) => boolean;
};
