import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import AppButton from '../../components/AppButton';
import AppTitle from '../../components/AppTitle';
import AppTextInput from '../../components/AppTextInput';
import { DatabaseConnection } from '../../database/database-connection';
import { router } from 'expo-router';
import { Container } from '../../components/Container';


const db = DatabaseConnection.getConnection();

const UpdateUser = () => {
  const [inputUserId, setInputUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const updateAllStates = (name: string, date: string, email: string) => {
    setUserName(name);
    setUserDate(date);
    setUserEmail(email);
  };

  const searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.user_name,
              res.user_date,
              res.user_email
            );
          } else {
            alert('Usuário não encontrado!');
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userDate, userEmail);

    if (!inputUserId) {
      alert('Por Favor informe o ID!');
      return;
    }
    if (!userName) {
      alert('Por favor informe o Nome !');
      return;
    }
    if (!userDate) {
      alert('Por Favor informe a data !');
      return;
    }
    if (!userEmail) {
      alert('Por Favor informe o email !');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_date=? , user_email=? where user_id=?',
        [userName, userDate, userEmail, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Usuário atualizado com sucesso !!',
              [
                {
                  text: 'Ok',
                  onPress: () => router.push('/'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erro ao atualizar o usuário');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <AppTitle text="Filtro de Usuário" />
              <AppTextInput
                placeholder="Entre com o ID do Usuário"
                style={{ padding: 10 }}
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
              />
              <AppButton
                title="Buscar Usuário"
                customClick={searchUser}
              />
              <AppTextInput
                placeholder="Entre com o Nome"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <AppTextInput
                placeholder="Entre com a data"
                value={'' + userDate}
                onChangeText={
                  (userDate) => setUserDate(userDate)
                }
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <AppTextInput
                value={userEmail}
                placeholder="Entre com o Email"
                onChangeText={
                  (userEmail) => setUserEmail(userEmail)
                }
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <AppButton
                title="Atualizar Usuário"
                customClick={updateUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default UpdateUser;