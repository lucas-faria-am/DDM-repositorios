import React, { useState } from 'react';
import { UserProps } from '../../@types/UserProps';
import AppTitle from '../../components/appTitle/AppTitle';
import AppButton from '../../components/button/AppButton';
import { Container } from '../../components/container/Container';
import AppTextInput from '../../components/input/AppInput';
import UserCard from '../../components/userCard/UserCard';
import { getUser } from '../../services/api/userAPI';

const ViewUser = () => {
  const [inputUserCpf, setInputUserCpf] = useState('');
  const [userData, setUserData] = useState<UserProps>();

  const searchUser = async () => {
    try {
      const user = await getUser(inputUserCpf);
      setUserData(user);
    } catch (error: any) {
      alert(error.message);
    }


  }

  return (
    <Container>
      <AppTitle text="Filtro de Usuário" />
      <AppTextInput
        placeholder="Entre com o CPF do Usuário"
        onChangeText={
          (inputUserCpf) => setInputUserCpf(inputUserCpf)
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