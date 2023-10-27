import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { ButtonClose } from '../../components/ButtonClose';
import { Input } from '../../components/Input';
import CloseApp from '../../components/closeApp';
import { db } from '../../db/bancoLocal-config';
import { ButtonContainer, Container, Lista, ListaItem, Subtitle, Title } from './styles';
import { SQLResultSetRowList } from 'expo-sqlite';
import { FlatList, SafeAreaView, TouchableOpacity, View, Text } from "react-native";

type UserData = {
    id: string;
    nome: string;
    dataNasc: string;
    email: string;
}

export function Main() {


    const { createTable, insertToTable, selectFromTable } = db();
    const [id, setId] = useState<string>("");
    const [name, setName] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [email, setEmail] = useState("");
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
            id,
            name,
            dataNasc,
            email,
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
                <Text ></Text>
                {users?.map((user) => (
                    <ListaItem
                        key={user.id}
                    // onPress={() => onPressItem && onPressItem(id)}
                    >
                        <Text>{user.id}</Text>
                        <Text>{user.nome}</Text>
                        <Text>{user.dataNasc}</Text>
                        <Text>{user.email}</Text>
                    </ListaItem>
                ))}
            </Lista>

        </Container>
    );
}