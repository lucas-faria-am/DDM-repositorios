import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import { Botao } from '../../components/Botao';
import Container from '../../components/Container';
import { FontAwesome } from '@expo/vector-icons';
import * as Expo from 'expo'


export default function FuncoesNativas() {
  const { push } = useRouter();


  const handleCamera = () => {
    push("/camera/");
  }

  const handleContatos = () => {
    push("/contatos/");
  }

  const handleExit = () => {
    Alert.alert(
      "Sair",
      "Quer Realmente sair do App",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: () => {
            BackHandler.exitApp();
          },
        }
      ]
    )
  }

  return (
    <Container>
      <View style={styles.box}>
        <Text style={styles.title}>Selecione uma das funcionalidades</Text>
        <View style={styles.separator} />
        <Botao title='Abrir Camera' action={handleCamera} />
        <Botao title='Abrir Contatos' action={handleContatos} />
        <Botao title='Sair do App' action={handleExit} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    alignItems: "center",
    flexDirection: 'column',
    width: '90%',
    backgroundColor: '#cbcbcb',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
});
