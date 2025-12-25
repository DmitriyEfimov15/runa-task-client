import { IResponseWithNotification } from "./types/responseWithNotificaton";

export const isResponseWithMessage = (obj: unknown): obj is IResponseWithNotification => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "message" in obj &&
    typeof (obj as any).message === "string" &&
    "statusCode" in obj &&
    typeof (obj as any).statusCode === "number" &&
    (obj as any).statusCode !== 401
  );
};
