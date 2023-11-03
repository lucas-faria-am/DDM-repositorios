import React from "react";
import { UserProps } from "../@types/UserProps";

export const validationFields = (
    user_id: string,
    user_name: string,
    user_date: string,
    user_email: string
) => {
    return new Promise((resolve) => {
        if (!user_id) {
            alert("Por favor preencha o ID !");
            return;
        }
        if (!user_name) {
            alert("Por favor preencha o nome !");
            return;
        }
        if (!user_date) {
            alert("Por favor preencha a data");
            return;
        }
        if (!user_email) {
            alert("Por favor preencha o email !");
            return;
        }
        resolve("success");
    });
};
