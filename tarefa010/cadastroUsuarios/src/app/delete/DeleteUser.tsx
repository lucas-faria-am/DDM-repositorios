import React, { useState } from 'react';
import { View, Alert, SafeAreaView } from 'react-native';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import { DatabaseConnection } from '../../database/database-connection';
import { router } from 'expo-router';
import { Container } from '../../components/Container';

const db = DatabaseConnection.getConnection();

const DeleteUser = () => {
  const [inputUserId, setInputUserId] = useState('');

  const deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Usuário Excluído com Sucesso !',
              [
                {
                  text: 'Ok',
                  onPress: () => router.push('/'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Por favor entre com um código de usuário válido !');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <View style={{ flex: 1 }}>
          <AppTextInput
            placeholder="Entre com o Código do Usuário"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <AppButton title="Excluir Usuário" customClick={deleteUser} />
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default DeleteUser;