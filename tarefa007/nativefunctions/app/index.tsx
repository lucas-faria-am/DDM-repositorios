import { Text, StyleSheet, View, Button } from 'react-native';
import { router } from 'expo-router';
import Container from '../components/Container';
import { Botao } from '../components/Botao';



export default function BemVindo() {

    const handleRouter = () => {
        router.replace('/funcoesNativas/')
    }

    return (
        <Container>
            <Text style={styles.title1}>ADS</Text>
            <View style={styles.separator} />
            <Text style={styles.title2}>DDM</Text>
            <View style={styles.separator} />
            <Text style={styles.title3}>Funcionalidades nativas</Text>
            <View style={styles.separator} />
            <Botao title='Entrar para as funcionalidades' action={handleRouter} />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:  '#0b0130e5'
    },
    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    title3: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
