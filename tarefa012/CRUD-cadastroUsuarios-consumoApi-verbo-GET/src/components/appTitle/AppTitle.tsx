import React from 'react';
import * as S from "./styles";

const AppTitle = (props: { text: string }) => {
  return <S.Text>{props.text}</S.Text>;
};

export default AppTitle;