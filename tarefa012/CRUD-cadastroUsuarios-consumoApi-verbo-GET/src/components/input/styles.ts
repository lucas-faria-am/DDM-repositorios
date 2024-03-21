import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Container = styled.View`
    margin-left: 35px;
    margin-right: 35px;
    margin-top: 10px;
    border-color: #00ad98;
    border-width: 1px;
    padding: 10px;
`;

export const Input = styled.TextInput`
    color: white;
`;

export const InputMask = styled(TextInputMask)`
    color: white;
`;
