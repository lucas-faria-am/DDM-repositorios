import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { DatabaseConnection } from '../../database/database-connection';
import { UserProps } from '../../@types/UserProps';
import { Container } from '../../components/Container';
import { ItemListView, TextNotFound, Textbottom, Textheader } from './styles';

const db = DatabaseConnection.getConnection();



const ViewAllUser = () => {
  const [flatListItems, setFlatListItems] = useState<UserProps[] | undefined>(undefined);
  const [usersExist, setUsersExist] = useState<boolean>(true);

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

    if (flatListItems === undefined) {
      setUsersExist(false);
    }

  }, []);

  const listItemView = (item: UserProps) => {
    return (
      <ItemListView
        key={item.user_id}
      >
        <Textheader>Código</Textheader>
        <Textbottom>{item.user_id}</Textbottom>

        <Textheader>Nome</Textheader>
        <Textbottom>{item.user_name}</Textbottom>

        <Textheader>Data</Textheader>
        <Textbottom>{item.user_date}</Textbottom>

        <Textheader>Email</Textheader>
        <Textbottom>{item.user_email}</Textbottom>


      </ItemListView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <View style={{ flex: 1 }}>
          {usersExist &&
            <FlatList
              style={{ marginTop: 30 }}
              contentContainerStyle={{ paddingHorizontal: 20 }}
              data={flatListItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listItemView(item)}
            />
          }
          {!usersExist &&
            <TextNotFound>Não há usuarios cadastrados</TextNotFound>
          }
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default ViewAllUser;