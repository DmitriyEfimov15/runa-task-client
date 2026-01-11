import { API_URL } from "../constants/server";
import { useToasterStore } from "../store/toasterStore";
import { isResponseWithMessage } from "./typeguards";

export const fetchClient = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const showToaster = useToasterStore.getState().showToaster;

  const isFormData = options?.body instanceof FormData;

  try {
    let response = await fetch(`${API_URL}${url}`, {
      credentials: "include",
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...options?.headers,
      },
      ...options,
    });

    // Если 401 — пробуем обновить токены
    if (response.status === 401) {
      const refreshRes = await fetch(`${API_URL}/auth/refresh`, {
        method: "GET",
        credentials: "include",
      });

      if (!refreshRes.ok) {
        throw new Error("Сессия истекла");
      }

      response = await fetch(`${API_URL}${url}`, {
        credentials: "include",
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
          ...options?.headers,
        },
        ...options,
      });
    }

    const data = await response.json().catch(() => ({}));

    if (isResponseWithMessage(data)) {
      showToaster(data.message, data.statusCode);
      if (!response.ok) {
        throw new Error(data.message);
      }
    }

    return data as T;
  } catch (err) {
    throw err;
  }
};
