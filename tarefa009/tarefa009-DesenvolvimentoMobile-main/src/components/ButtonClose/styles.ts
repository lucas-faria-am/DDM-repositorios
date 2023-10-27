import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 120px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color:${({ theme }) => theme.COLORS.RED};
  border-radius: 10px;
  margin-left: 50px;
  
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-left: 7px;
`;
