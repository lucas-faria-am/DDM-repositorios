import React from "react";
import {
    View,
    Text,
    Button,
    Alert,
    StyleSheet,
    BackHandler,
} from "react-native";
import DatePicker from "./components/datePicker/DatePickerApp";
import PickerApp from "./components/picker/PickerApp";
import SliderApp from "./components/form/SliderApp";
import SwitchApp from "./components/switch/SwitchApp";

export default function App() {
    const handleSair = () => {
        Alert.alert("Sair", "Quer Realmente sair do App", [
            {
                text: "Cancelar",
                style: "cancel",
            },
            {
                text: "Sair",
                onPress: () => {
                    BackHandler.exitApp();
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Tarefa 008 - Desenvolvimento Mobile
            </Text>
            <View style={styles.buttonContainer}>
                <DatePicker />
            </View>
            <View style={styles.componentContainer}>
                <SwitchApp />
            </View>
            <View style={styles.componentContainer}>
                <SliderApp />
            </View>
            <View style={styles.componentContainer}>
                <PickerApp />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button
                        color={"red"}
                        title="Fechar App"
                        onPress={handleSair}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        color={"green"}
                        title="Salvar"
                        onPress={() => Alert.alert("SALVAR")}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        color: "purple",
        fontWeight: "bold",
        marginBottom: 20,
    },
    componentContainer: {
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    buttonWrapper: {
        borderRadius: 25,
        overflow: "hidden",
        width: 150,
    },
});
