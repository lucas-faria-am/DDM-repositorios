import React, { useState } from 'react';
import AppButton from '../../components/button/AppButton';
import { Container } from '../../components/container/Container';
import AppInputMask from '../../components/input/AppInputMask';
import { delUser, getUser } from '../../services/dbActions';

const DeleteUser = () => {
  const [inputUserId, setInputUserId] = useState('');

  const handleDelete = async () => {
    try {
      const user = await getUser(inputUserId);
      if (user) {
        delUser(inputUserId);
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
          (inputUserId) => setInputUserId(inputUserId)
        }
        type="only-numbers"
        keyboardType="numeric"
      />
      <AppButton title="Excluir Usuário" customClick={handleDelete} />
    </Container>
  );
};

export default DeleteUser;