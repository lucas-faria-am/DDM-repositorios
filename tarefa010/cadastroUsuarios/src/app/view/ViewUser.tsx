import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import AppButton from '../../components/AppButton';
import AppTitle from '../../components/AppTitle';
import AppTextInput from '../../components/AppTextInput';
import { DatabaseConnection } from '../../database/database-connection';
import { UserProps } from '../../@types/UserProps';
import { Container } from '../../components/Container';


const db = DatabaseConnection.getConnection();

const ViewUser = () => {
  const [inputUserId, setInputUserId] = useState('');
  const [userData, setUserData] = useState<UserProps>();

  const searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
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
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <View style={{ flex: 1 }}>
          <AppTitle text="Filtro de Usuário" />
          <AppTextInput
            placeholder="Entre com o ID do Usuário"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <AppButton title="Buscar Usuário" customClick={searchUser} />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>ID : {userData?.user_id}</Text>
            <Text>Nome : {userData?.user_name}</Text>
            <Text>Data : {userData?.user_date}</Text>
            <Text>Email : {userData?.user_email}</Text>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default ViewUser;