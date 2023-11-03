import React from "react";
import { View } from "react-native"
import styled from "styled-components/native"
import * as S from "./styles";

type ContainerProps = {
    children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
    return (
        <S.AreaContainer >{children}</S.AreaContainer>
    )
}


