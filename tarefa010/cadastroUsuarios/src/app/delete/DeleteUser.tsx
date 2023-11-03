import React, { useState } from 'react';
import AppButton from '../../components/button/AppButton';
import { Container } from '../../components/container/Container';
import AppInputMask from '../../components/input/AppInputMask';
import { DatabaseConnection } from '../../database/database-connection';
import { delUser } from '../../services/dbActions';

const db = DatabaseConnection.getConnection();

const DeleteUser = () => {
  const [inputUserId, setInputUserId] = useState('');
  const [existUser, setExistUser] = useState(false);

  const handleDelete = () => {
    db.transaction((tx) => {

      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            setExistUser(true);
          } else {
            alert('Usuário não encontrado !');
            return;
          }
        }
      );

      if (existUser) {
        delUser(inputUserId);
      }
    });
  };

  return (
    <Container>
      <AppInputMask
        placeholder="Entre com o Código do Usuário"
        onChangeText={
          (inputUserId) => setInputUserId(inputUserId)
        }
        type="only-numbers"
      />
      <AppButton title="Excluir Usuário" customClick={handleDelete} />
    </Container>
  );
};

export default DeleteUser;