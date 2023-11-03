import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import AppButton from '../../components/button/AppButton';
import AppTitle from '../../components/appTitle/AppTitle';
import AppTextInput from '../../components/input/AppInput';
import { DatabaseConnection } from '../../database/database-connection';
import { UserProps } from '../../@types/UserProps';
import { Container } from '../../components/container/Container';
import UserCard from '../../components/userCard/UserCard';


const db = DatabaseConnection.getConnection();

const ViewUser = () => {
  const [inputUserId, setInputUserId] = useState('');
  const [userData, setUserData] = useState<UserProps>();

  const searchUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('Usuário não encontrado !');
          }
        }
      );
    });
  };

  return (
    <Container>
      <AppTitle text="Filtro de Usuário" />
      <AppTextInput
        placeholder="Entre com o ID do Usuário"
        onChangeText={
          (inputUserId) => setInputUserId(inputUserId)
        }
      />
      <AppButton title="Buscar Usuário" customClick={searchUser} />
      {userData &&
        <UserCard {...userData} />
      }
    </Container>
  );
};

export default ViewUser;