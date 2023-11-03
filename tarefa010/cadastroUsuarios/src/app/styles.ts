import styled from "styled-components/native";

type Props = {
    btnColor: string;
};

export const CardButton = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    margin-top: 16px;
    margin-left: 35px;
    margin-right: 35px;
    border-radius: 5px;
    background-color: ${(props: Props) => props.btnColor};
`;

export const CardTitle = styled.Text`
    color: #ffffff;
`;
