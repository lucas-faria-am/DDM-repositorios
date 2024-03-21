import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { UserProps } from '../../@types/UserProps';
import { Container } from '../../components/container/Container';
import * as S from './styles';
import UserCard from '../../components/userCard/UserCard';
import { getAllUser } from '../../services/api/userAPI';


const ViewAllUser = () => {
  const [flatListItems, setFlatListItems] = useState<UserProps[]>();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const user = await getAllUser();
        setFlatListItems(user);
      } catch (error: any) {
        setMessage(error.message);
      }
    };

    getUsers();
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
        <S.TextNotFound>{message}</S.TextNotFound>
      }
    </Container>
  );
};

export default ViewAllUser;