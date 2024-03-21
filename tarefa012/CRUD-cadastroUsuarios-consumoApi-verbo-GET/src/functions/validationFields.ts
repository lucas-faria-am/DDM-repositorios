import React from "react";
import { UserProps } from "../@types/UserProps";
import validacaoAdapter from "./validacaoAdapter";


export const validationFields = (
    user_cpf: string,
    user_name: string,
    user_date: string,
    user_email: string
) => {
    const validType = new validacaoAdapter();
    return new Promise((resolve) => {

        if (!user_cpf) {
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
        if(!validType.isEmail(user_email)){
            alert("Por favor preencher com um e-mail valido!");
            return;
        }
        resolve("success");
    });
};
