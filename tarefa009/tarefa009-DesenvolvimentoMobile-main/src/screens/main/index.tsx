import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { ButtonClose } from '../../components/ButtonClose';
import { Input } from '../../components/Input';
import CloseApp from '../../components/closeApp';
import { db } from '../../db/bancoLocal-config';
import { ButtonContainer, Container, Subtitle, Title } from './styles';

type UserData = {
    nome: string;
    sobreNome: string;
    email: string;
}

export function Main() {
    const { createTable, insertToTable } = db();
    const [name, setName] = useState("");
    const [sobreNome, setSobreNome] = useState("");
    const [email, setEmail] = useState("");

    createTable();

    const salvarDados = () => {
        const data = {
            name,
            sobreNome,
            email,
        }
        console.log(data);
        // insertToTable();
        insertToTable(data);
    }

    return (
        <Container>
            <Title>Tarefa 009 </Title>
            <Title>Desenvolvimento Mobile</Title>
            <Subtitle>Insira seus dados</Subtitle>

            <Input
                placeholder="Nome"
                keyboardType='default'
                onChangeText={setName}

            />
            <Input

                placeholder="Sobrenome"
                keyboardType="number-pad"
                value={sobreNome}
                onChangeText={setSobreNome}
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

        </Container>
    );
}