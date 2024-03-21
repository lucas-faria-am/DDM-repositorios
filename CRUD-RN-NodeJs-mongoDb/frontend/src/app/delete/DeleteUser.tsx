import React, { useState } from 'react';
import AppButton from '../../components/button/AppButton';
import { Container } from '../../components/container/Container';
import AppInputMask from '../../components/input/AppInputMask';
import { delUser, getUser } from '../../services/api/userAPI';

const DeleteUser = () => {
  const [inputUserCpf, setinputUserCpf] = useState('');

  const handleDelete = async () => {
    try {
      const user = await getUser(inputUserCpf);
      if (user) {
        delUser(inputUserCpf);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <AppInputMask
        placeholder="Entre com o Código do Usuário"
        onChangeText={
          (inputUserCpf) => setinputUserCpf(inputUserCpf)
        }
        type="only-numbers"
        keyboardType="numeric"
      />
      <AppButton title="Excluir Usuário" customClick={handleDelete} />
    </Container>
  );
};

export default DeleteUser;