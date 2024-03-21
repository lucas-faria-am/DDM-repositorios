import React, { useState } from 'react';
import {
  ScrollView
} from 'react-native';
import AppButton from '../../components/button/AppButton';
import { Container } from '../../components/container/Container';
import AppTextInput from '../../components/input/AppInput';
import AppInputMask from '../../components/input/AppInputMask';
import { validationFields } from '../../functions/validationFields';
import * as S from "./styles";
import {registerUser, getAllUser  }from '../../services/api/userAPI';



const RegisterUser = () => {

  const [userCpf, setuserCpf] = useState('');
  const [userName, setUserName] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userEmail, setUserEmail] = useState('');



  const register_user = async () => {
    
    await validationFields(userCpf, userName, userDate, userEmail);

    const data = {
      user_cpf: userCpf,
      user_name: userName,
      user_date: userDate,
      user_email: userEmail
    }

    console.log("oi")
    registerUser(data); 
  };

  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        <S.KeyBoardView
          behavior="padding"
        >
          <AppInputMask
            placeholder="Entre com o CPF"
            onChangeText={
              (userCpf: string) => setuserCpf(userCpf)
            }
            keyboardType="numeric"
            maxLength={11}
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