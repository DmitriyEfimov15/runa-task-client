import { IOtpFormValues } from "@/src/shared/ui/opt-form"
import { useMutation } from "@tanstack/react-query"
import { changeEmail } from "../api/authApi"


export const useChangeEmail = () => {
    return useMutation({
        mutationFn: (data: IOtpFormValues) => changeEmail(data)
    })
}