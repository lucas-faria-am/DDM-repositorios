import { BackHandler, Alert } from 'react-native';

export default function CloseApp() {

    Alert.alert(
        "Alerta!",
        "Deseja mesmo sair do app?",
        [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: () => {
                    BackHandler.exitApp();
                }
            }
        ]
    );
}