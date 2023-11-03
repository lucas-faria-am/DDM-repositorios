import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from 'react-native';
import AppButton from '../../components/button/AppButton';
import AppTextInput from '../../components/input/AppInput';
import { DatabaseConnection } from '../../database/database-connection';
import { router } from "expo-router";
import * as S from "./styles";
import { Container } from '../../components/container/Container';
import AppInputMask from '../../components/input/AppInputMask';

const db = DatabaseConnection.getConnection();

const RegisterUser = () => {

  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const register_user = () => {
    console.log(userId, userName, userDate, userEmail);

    if (!userId) {
      alert('Por favor preencha o ID !');
      return;
    }
    if (!userName) {
      alert('Por favor preencha o nome !');
      return;
    }
    if (!userDate) {
      alert('Por favor preencha a data');
      return;
    }
    if (!userEmail) {
      alert('Por favor preencha o email !');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_id, user_name, user_date, user_email) VALUES (?,?,?,?)',
        [userId, userName, userDate, userEmail],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Usuário Registrado com Sucesso !!!',
              [
                {
                  text: 'Ok',
                  onPress: () => router.push('/'),
                },
              ],
              { cancelable: false }
            );
          } else Alert.alert('Erro ao tentar Registrar o Usuário !!!');
        }
      );
    });
  };

  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        <S.KeyBoardView
          behavior="padding"
        >
          <AppInputMask
            placeholder="Entre com o ID"
            onChangeText={
              (userId: string) => setUserId(userId)
            }
            keyboardType="numeric"
            maxLength={10}
            type="only-numbers"
          />
          <AppTextInput
            placeholder="Entre com o Nome"
            onChangeText={
              (userName: string) => setUserName(userName)
            }
          />
          <AppInputMask
            placeholder="Entre com a data"
            onChangeText={
              (userDate: string) => setUserDate(userDate)
            }
            maxLength={10}
            keyboardType="numeric"
            type="datetime"
          />
          <AppTextInput
            placeholder="Entre com o Email"
            onChangeText={
              (userEmail: string) => setUserEmail(userEmail)
            }
          />
          <AppButton title="Salvar" customClick={register_user} />
        </S.KeyBoardView>
      </ScrollView>
    </Container>
  );
};

export default RegisterUser;