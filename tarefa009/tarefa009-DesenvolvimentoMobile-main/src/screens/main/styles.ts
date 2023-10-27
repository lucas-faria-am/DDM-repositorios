import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
    padding: 24px;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const Subtitle = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.PURPLE};
    margin-bottom: 32px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
`;

export const Lista = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
    padding: 24px;
`;

export const ListaItem = styled.View`
background-color: "#121212",
justi: "#000",
borderWidth: 1,
padding: 8,
`;

export const ListaTitle = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-bottom: 32px;
`;
