import axios from 'axios';
import { UserProps } from '../../@types/UserProps';
import { Alert } from "react-native";
import { router } from 'expo-router';

const registerUser = async (data: UserProps) => {
    try {
        const resultado = await getUser(data.user_cpf);
        if (!resultado) {
            axios.post("https://apirestful.onrender.com/person", data);
            Alert.alert(
                "Sucesso",
                "Usuário Registrado com Sucesso !!!",
                [
                    {
                        text: "Ok",
                        onPress: () => router.push("/"),
                    },
                ],
                { cancelable: false }
            );
        } else {
            alert("Esse usuário já existe!");
        }
    } catch (error) {
        alert(
            "Erro ao tentar Registrar o Usuário !!!"
        );
    }
}


const getAllUser = async () => {
    
    const response = await axios.get("https://apirestful.onrender.com/person")

    const result =  response.data.person;
      
    return result;
}

const getUser = async (cpf: string) => {
    try {
        const response = await axios.get(`https://apirestful.onrender.com/person/${cpf}`);
        return response.data.person;
    } catch (error) {
        return null;
    }
}


const updateUser = async (data: UserProps) => {
    const response = await axios.put(`https://apirestful.onrender.com/person/${data.user_cpf}`, data);
    if(response) {
        Alert.alert(
            "Sucesso",
            "Usuário atualizado com sucesso !!",
            [
                {
                    text: "Ok",
                    onPress: () => router.back(),
                },
            ],
            { cancelable: false }
        );
    } 
}

const delUser = (cpf: string) => {

    Alert.alert("Alerta!", "Deseja mesmo excluir esse usuário?", [
        {
            text: "Não",
            onPress: () => null,
            style: "cancel",
        },
        {
            text: "sim",
            onPress: async () => {
                const response = await axios.delete(`https://apirestful.onrender.com/person/${cpf}`);
                console.log(response.data);
                Alert.alert(
                    "Sucesso",
                    `${response.data.message}`,
                    [
                        {
                            text: "Ok",
                            onPress: () => router.back(),
                        },
                    ],
                    { cancelable: false } 
                );
            }
        },
    ])
   
    
}


export { registerUser, getAllUser, getUser, updateUser, delUser };