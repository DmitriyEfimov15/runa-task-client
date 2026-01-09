export type TChangePasswordForAuthorizedForm = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type TChangePasswordFormProps = {
  isLoading: boolean;
  onSubmit: (data: TChangePasswordForAuthorizedForm) => Promise<void>;
};
