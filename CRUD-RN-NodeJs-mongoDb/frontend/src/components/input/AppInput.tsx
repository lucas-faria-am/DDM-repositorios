import React from 'react';
import { TextInputProps } from 'react-native';
import * as S from "./styles";

type InputProps = TextInputProps;

const AppInput = (props: InputProps) => {
  return (
    <S.Container>
      <S.Input
        {...props}
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#00AD98"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </S.Container>
  );
};

export default AppInput;