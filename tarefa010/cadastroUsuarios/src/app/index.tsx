import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import AppClose from '../functions/AppClose';
import { DatabaseConnection } from '../database/database-connection';
import { router } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { createTable } from '../services/dbActions';
import { Container } from '../components/Container';
import { CardButton, CardTitle } from './styles';


const HomeScreen = () => {


    useEffect(() => {
        createTable();
    }, []);

    return (
        <Container>
            <CardButton
                btnColor='#2992C4'
                onPress={() => router.push('/register/RegisterUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="user-plus" size={24}
                    color="white"
                />
                <CardTitle>Registrar Usuário</CardTitle>
            </CardButton>

            <CardButton
                btnColor='#A45BB9'
                onPress={() => router.push('/update/UpdateUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="user-circle" size={24}
                    color="white"
                />
                <CardTitle>Atualizar Usuário</CardTitle>
            </CardButton>

            <CardButton
                btnColor='#F9AD29'
                onPress={() => router.push('/view/ViewUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="user" size={24}
                    color="white"
                />
                <CardTitle>Visualizar Usuário</CardTitle>
            </CardButton>

            <CardButton
                btnColor='#51DC32'
                onPress={() => router.push('/view/ViewAllUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="users" size={24}
                    color="white"
                />
                <CardTitle>Visualizar Todos</CardTitle>
            </CardButton>

            <CardButton
                btnColor='#384F62'
                onPress={() => router.push('/delete/DeleteUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="user-times" size={24}
                    color="white"
                />
                <CardTitle>Excluir Usuário</CardTitle>
            </CardButton>

            <CardButton
                btnColor='#D1503A'
                onPress={() => AppClose()}
            >
                <FontAwesome
                    className="p-[5]"
                    name="close" size={24}
                    color="white"
                />
                <CardTitle>FecharApp</CardTitle>
            </CardButton>
        </Container>
    );
};

export default HomeScreen;