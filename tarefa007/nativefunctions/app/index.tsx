import { Text, StyleSheet, View, Button  } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Botao } from '../components/botao';
import { router } from 'expo-router';



export default function TabOneScreen() {
    const handleNav = () => {
        router.replace('/funcoesNativas/')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title1}>ADS</Text>
            <View style={styles.separator} />
            <Text style={styles.title2}>DDM</Text>
            <View style={styles.separator} />
            <Text style={styles.title3}>Funcionalidades nativas</Text>
            <View style={styles.separator} />
            <Botao title='Entrar para as funcionalidades' action={handleNav} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
