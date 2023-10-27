import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { ButtonClose } from '../../components/ButtonClose';
import { Input } from '../../components/Input';
import CloseApp from '../../components/closeApp';
import { db } from '../../db/bancoLocal-config';
import { ButtonContainer, Container, Lista, ListaItem, ListaTitle, Subtitle, Title } from './styles';
import { SQLResultSetRowList } from 'expo-sqlite';
import { FlatList, SafeAreaView, TouchableOpacity, View, Text } from "react-native";

type UserData = {
    ID: string;
    NOME: string;
    DATANASC: string;
    EMAIL: string;
}

export function Main() {


    const { createTable, insertToTable, selectFromTable } = db();
    const [ID, setId] = useState<string>("");
    const [NOME, setName] = useState("");
    const [DATANASC, setDataNasc] = useState("");
    const [EMAIL, setEmail] = useState("");
    const [users, setUsers] = useState<UserData[]>();

    useEffect(() => {
        createTable();
        const users = selectFromTable();

        if (users) {
            setUsers(users);
        }

    }, [])

    const salvarDados = () => {
        const data = {
            ID,
            NOME,
            DATANASC,
            EMAIL,
        }
        console.log(data);

        insertToTable(data);
    }

    return (
        <Container>
            <Title>Tarefa 009 </Title>
            <Title>Desenvolvimento Mobile</Title>
            <Subtitle>Insira seus dados</Subtitle>

            <Input
                placeholder="Id"
                keyboardType="number-pad"
                onChangeText={setId}
            />

            <Input
                placeholder="Nome"
                keyboardType="default"
                onChangeText={setName}
            />
            <Input

                placeholder="Data de nascimento"
                keyboardType="number-pad"
                onChangeText={setDataNasc}
            />

            <Input
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={setEmail}
            />

            <ButtonContainer>
                <Button title="Salvar" onPress={salvarDados} />
                <ButtonClose title="Fechar" onPress={() => { CloseApp() }} />
            </ButtonContainer>

            <Lista >
                <ListaTitle >Users</ListaTitle>
                {users?.map((user) => (
                    <ListaItem
                        key={user.ID}
                    // onPress={() => onPressItem && onPressItem(id)}
                    >
                        <Text>Teste</Text>
                        <Text>{user.ID}</Text>
                        <Text>{user.NOME}</Text>
                        <Text>{user.DATANASC}</Text>
                        <Text>{user.EMAIL}</Text>
                    </ListaItem>
                ))}
            </Lista>

        </Container>
    );
}