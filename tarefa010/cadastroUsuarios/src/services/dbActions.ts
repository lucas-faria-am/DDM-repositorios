import { Alert } from "react-native";
import { UserProps } from "../@types/UserProps";
import { DatabaseConnection } from "../database/database-connection";
import { router } from "expo-router";

const db = DatabaseConnection.getConnection();

const createTable = (): void => {
    db.transaction(function (txn) {
        txn.executeSql(
            "CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY, user_name VARCHAR(20), user_date VARCHAR(20), user_email VARCHAR(30))",
            []
        );
    });
};

const delUser = (inputUserId: string): void => {
    Alert.alert("Alerta!", "Deseja mesmo excluir esse usuário?", [
        {
            text: "Não",
            onPress: () => null,
            style: "cancel",
        },
        {
            text: "Sim",
            onPress: () => {
                db.transaction((tx) => {
                    tx.executeSql(
                        "DELETE FROM  table_user where user_id=?",
                        [inputUserId],
                        (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert(
                                    "Sucesso",
                                    "Usuário Excluído com Sucesso !",
                                    [
                                        {
                                            text: "Ok",
                                            onPress: () => router.back(),
                                        },
                                    ],
                                    { cancelable: false }
                                );
                            }
                        }
                    );
                });
            },
        },
    ]);
};

export { createTable, delUser };
