import React, { useState } from 'react';
import {
  ScrollView
} from 'react-native';
import AppTitle from '../../components/appTitle/AppTitle';
import AppButton from '../../components/button/AppButton';
import { Container } from '../../components/container/Container';
import AppTextInput from '../../components/input/AppInput';
import AppInputMask from '../../components/input/AppInputMask';
import { validationFields } from '../../functions/validationFields';
import { getUser, updateUser } from '../../services/dbActions';
import * as S from './styles';


const UpdateUser = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const updateAllStates = (name: string, date: string, email: string) => {
    setUserName(name);
    setUserDate(date);
    setUserEmail(email);
  };

  const searchUser = async () => {
    try {
      const user = await getUser(userId);
      updateAllStates(user.user_name, user.user_date, user.user_email);
    } catch (error: any) {
      alert(error.message);
    }
  };
  const attUser = async () => {

    await validationFields(userId, userName, userDate, userEmail);
    await updateUser(userId, userName, userDate, userEmail);
  };

  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        <S.KeyBoardView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }}>
          <AppTitle text="Filtro de Usuário" />
          <AppInputMask
            placeholder="Entre com o ID do Usuário"
            onChangeText={
              (userId) => setUserId(userId)
            }
            type="only-numbers"
            keyboardType="numeric"
          />
          <AppButton
            title="Buscar Usuário"
            customClick={searchUser}
          />
          <AppTextInput
            placeholder="Entre com o Nome"
            value={userName}
            onChangeText={
              (userName) => setUserName(userName)
            }
          />
          <AppInputMask
            placeholder="Entre com a data"
            value={'' + userDate}
            onChangeText={
              (userDate) => setUserDate(userDate)
            }
            maxLength={10}
            keyboardType="numeric"
            type="datetime"
          />
          <AppTextInput
            value={userEmail}
            placeholder="Entre com o Email"
            onChangeText={
              (userEmail) => setUserEmail(userEmail)
            }
            keyboardType="email-address"
          />
          <AppButton
            title="Atualizar Usuário"
            customClick={attUser}
          />
        </S.KeyBoardView>
      </ScrollView>
    </Container>
  );
};

export default UpdateUser;