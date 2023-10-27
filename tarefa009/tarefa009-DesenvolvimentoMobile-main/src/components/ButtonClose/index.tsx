import React, { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonClose({ title, ...rest }: Props) {

  return (
    <Container activeOpacity={0.8} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}