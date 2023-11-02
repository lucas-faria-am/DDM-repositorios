import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

type InputProps = TextInputProps;

const AppTextinput = (props: InputProps) => {
  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#00AD98',
        borderWidth: 1,
      }}>
      <TextInput
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
    </View>
  );
};

export default AppTextinput;