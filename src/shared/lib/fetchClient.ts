import { API_URL } from "../constants/server";
import { useToasterStore } from "../store/toasterStore";
import { isResponseWithMessage } from "./typeguards";

export const fetchClient = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const showToaster = useToasterStore.getState().showToaster;

  try {
    let response = await fetch(`${API_URL}${url}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
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

      // повторяем исходный запрос
      response = await fetch(`${API_URL}${url}`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        ...options,
      });
    }

    const data = await response.json().catch(() => ({}));

    if (isResponseWithMessage(data)) {
      if (!response.ok) {
        throw new Error(data.message);
      }
      showToaster(data.message, data.statusCode);
    }

    return data as T;
  } catch (err: any) {
    const message = err?.message || "Произошла неизвестная ошибка";
    throw err;
  }
};
