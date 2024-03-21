import React from 'react';
import * as S from './styles';

const AppButton = (props: { customClick: () => void, title: string }) => {
  return (
    <S.Container
      onPress={props.customClick}>

      <S.Title >
        {props.title}
      </S.Title>
    </S.Container>
  );
};

export default AppButton;