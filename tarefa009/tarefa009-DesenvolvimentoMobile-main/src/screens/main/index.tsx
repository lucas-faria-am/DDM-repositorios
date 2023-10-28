import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { ButtonClose } from '../../components/ButtonClose';
import { Input } from '../../components/Input';
import CloseApp from '../../components/closeApp';
import { db } from '../../db/bancoLocal-config';
import { ButtonContainer, Container, Lista, ListaItem, Subtitle, Title } from './styles';
import { SQLResultSetRowList } from 'expo-sqlite';
import { FlatList, SafeAreaView, TouchableOpacity, View, Text, ScrollView } from "react-native";

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
    const [users, setUsers] = useState<any>();



    useEffect(() => {
        const fetchData = async () => {
            createTable();
            const retornoBanco = await selectFromTable();
            console.log(retornoBanco);
            setUsers(retornoBanco);
        };

        fetchData();
    }, [])

    const salvarDados = () => {
        const data = {
            id,
            name,
            dataNasc,
            email,
        }
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
                <Text >usuários</Text>
                {users?.map(user => (
                    <View key={user.ID}>
                        <Text>{user.ID}</Text>
                        <Text>{user.NOME}</Text>
                        <Text>{user.DATANASC}</Text>
                        <Text>{user.EMAIL}</Text>
                    </View>
                ))}
            </Lista>
        </Container>
    );
}