import { BackHandler, Alert } from "react-native";

const AppClose = (): void => {
    Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
        {
            text: "Não",
            onPress: () => null,
            style: "cancel",
        },
        {
            text: "Sim",
            onPress: () => {
                BackHandler.exitApp();
            },
        },
    ]);
};

export default AppClose;
