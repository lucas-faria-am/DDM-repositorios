import { FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";
import React from 'react';
import { Container } from '../components/container/Container';
import AppClose from '../functions/AppClose';
import * as S from './styles';


const HomeScreen = () => {
    
    return (
        <Container>
            <S.CardButton
                btnColor='#2992C4'
                onPress={() => router.push('/register/RegisterUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="user-plus" size={24}
                    color="white"
                />
                <S.CardTitle>Registrar Usuário</S.CardTitle>
            </S.CardButton>

            <S.CardButton
                btnColor='#A45BB9'
                onPress={() => router.push('/update/UpdateUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="user-circle" size={24}
                    color="white"
                />
                <S.CardTitle>Atualizar Usuário</S.CardTitle>
            </S.CardButton>

            <S.CardButton
                btnColor='#ac7415'
                onPress={() => router.push('/view/ViewUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="user" size={24}
                    color="white"
                />
                <S.CardTitle>Visualizar Usuário</S.CardTitle>
            </S.CardButton>

            <S.CardButton
                btnColor='#348122'
                onPress={() => router.push('/view/ViewAllUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="users" size={24}
                    color="white"
                />
                <S.CardTitle>Visualizar Todos</S.CardTitle>
            </S.CardButton>

            <S.CardButton
                btnColor='#384F62'
                onPress={() => router.push('/delete/DeleteUser')}
            >
                <FontAwesome
                    className="p-[5]"
                    name="user-times" size={24}
                    color="white"
                />
                <S.CardTitle>Excluir Usuário</S.CardTitle>
            </S.CardButton>

            <S.CardButton
                btnColor='#D1503A'
                onPress={() => AppClose()}
            >
                <FontAwesome
                    className="p-[5]"
                    name="close" size={24}
                    color="white"
                />
                <S.CardTitle>FecharApp</S.CardTitle>
            </S.CardButton>
        </Container>
    );
};

export default HomeScreen;