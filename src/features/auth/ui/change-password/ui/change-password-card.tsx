import { Card, CardContent, CardHeader } from "@/src/shared/ui/card";
import { FC } from "react";
import ChangePasswordForm from "./change-password-form";


const ChangePasswordCard: FC = () => {  
    return (
        <Card className="min-w-90">
            <CardHeader className="text-center">Смена пароля</CardHeader>
            <CardContent className="min-w-full px-6">
                <ChangePasswordForm />
            </CardContent>
        </Card>
    )
}

export default ChangePasswordCard;