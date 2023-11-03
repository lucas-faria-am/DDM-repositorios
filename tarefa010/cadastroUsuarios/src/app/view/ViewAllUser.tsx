import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { DatabaseConnection } from '../../database/database-connection';
import { UserProps } from '../../@types/UserProps';
import { Container } from '../../components/container/Container';
import * as S from './styles';
import UserCard from '../../components/userCard/UserCard';

const db = DatabaseConnection.getConnection();



const ViewAllUser = () => {
  const [flatListItems, setFlatListItems] = useState<UserProps[] | undefined>(undefined);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          var temp: UserProps[] = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setFlatListItems(temp);
          console.log("antes do set", flatListItems);
        }
      );
    });

  }, []);

  return (
    <Container>
      {flatListItems &&
        <FlatList
          style={{ marginTop: 30 }}
          data={flatListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => UserCard(item)}
        />
      }
      {!flatListItems &&
        <S.TextNotFound>Não há usuarios cadastrados</S.TextNotFound>
      }
    </Container>
  );
};

export default ViewAllUser;