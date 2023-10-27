import { Text, StyleSheet, View, Button  } from 'react-native';
import { Botao } from '../components/Botao';
import { router } from 'expo-router';

type LayoutProps = {
  value: string;
  children: React.ReactNode;
};

export default function ThemeProvider({ value, children }: LayoutProps) {
  return (
    <View style={{ backgroundColor: `${value}`}}>{children}</View>
  );
}

