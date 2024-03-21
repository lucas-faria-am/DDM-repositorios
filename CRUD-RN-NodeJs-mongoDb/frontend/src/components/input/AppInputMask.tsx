import React from 'react';
import * as S from "./styles";
import { TextInputMaskProps } from 'react-native-masked-text';


type InputProps = TextInputMaskProps;

const AppInputMask = (props: InputProps) => {
    return (
        <S.Container>
            <S.InputMask
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

export default AppInputMask;