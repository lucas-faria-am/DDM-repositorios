import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as S from "./styles"

const AppTitle = (props: { text: string }) => {
  return <S.Text>{props.text}</S.Text>;
};

export default AppTitle;