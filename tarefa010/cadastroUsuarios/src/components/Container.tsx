import React from "react";
import { View } from "react-native"
import styled from "styled-components/native"

type ContainerProps = {
    children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
    return (
        <AreaContainer >{children}</AreaContainer>
    )
}


const AreaContainer = styled.SafeAreaView`
    flex: 1;
    padding-top: 10px;
    background: #050201;
`;
