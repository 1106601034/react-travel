import React from "react";
import { UserLayout } from "../../layouts/userLayout";
import { RegisterForm } from "./RegisterForm";

export const CreateAccountPage : React.FC = () => {
        return <UserLayout>
            <RegisterForm />
        </UserLayout>
}