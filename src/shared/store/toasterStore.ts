import { toast } from "sonner";
import { create } from "zustand";
import { IToasterStoreState } from "../lib/types/toasterStoreState";

export const useToasterStore = create<IToasterStoreState>(() => ({
  showToaster: (message: string, status: number) => {
    const isSuccess = status >= 200 && status < 300;

    toast[isSuccess ? "success" : "error"](isSuccess ? "Успех" : "Ошибка", {
      description: message,
    });
  },
}));
