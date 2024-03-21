import React from 'react';

import { UserProps } from '../../@types/UserProps';
import * as S from "./styles";



const UserCard = (user: UserProps) => {

  return (
    <S.Container>
      <S.Textheader>Id</S.Textheader>
      <S.Textbottom>{user.user_cpf}</S.Textbottom>

      <S.Textheader>Nome</S.Textheader>
      <S.Textbottom>{user.user_name}</S.Textbottom>

      <S.Textheader>Data</S.Textheader>
      <S.Textbottom>{user.user_date}</S.Textbottom>

      <S.Textheader>Email</S.Textheader>
      <S.Textbottom>{user.user_email}</S.Textbottom>
    </S.Container>
  );
};

export default UserCard;