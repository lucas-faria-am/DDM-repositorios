import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

type CardButtonProps = {
  customClick: () => void;
  btnColor: string;
  btnIcon: React.ReactNode;
  title: string;
}

const UserCard = ({ customClick, btnColor, btnIcon, title }: CardButtonProps) => {

  return (
    <CardButton
      onPress={customClick}>
      {btnIcon}


      <Text style={styles.text}>
        {title}
      </Text>
    </CardButton>
  );
};

export const CardButton = styled.TouchableOpacity`
    align-items: center;
    color: #ffffff;
    padding: 10px;
    margin-top: 16px;
    margin-left: 35px;
    margin-right: 35px;
    border-radius: 5px;
`;

export const text = styled.TouchableOpacity`
    align-items: center;
    color: #ffffff;
    padding: 10px;
    margin-top: 16px;
    margin-left: 35px;
    margin-right: 35px;
    border-radius: 5px;
`;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
  },
  icon: {
    paddingBottom: 5,
  }
});

export default UserCard;