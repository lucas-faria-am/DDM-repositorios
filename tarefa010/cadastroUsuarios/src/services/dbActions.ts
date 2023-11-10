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

const getUser = (inputUserId: string): Promise<UserProps> => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM table_user where user_id = ?",
                [inputUserId],
                (tx, results) => {
                    let len = results.rows.length;
                    if (len > 0) {
                        let res: UserProps = results.rows.item(0);
                        resolve(res);
                    } else {
                        reject(new Error("Usuário não encontrado!"));
                    }
                }
            );
        });
    });
};

const getAllUser = (): Promise<UserProps[]> => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM table_user", [], (tx, results) => {
                var temp: UserProps[] = [];
                if (results.rows.length > 0) {
                    for (let i = 0; i < results.rows.length; ++i) {
                        temp.push(results.rows.item(i));
                    }
                    resolve(temp);
                } else {
                    reject(new Error("Não há usuários cadastrados!"));
                }
            });
        });
    });
};

const registerUser = (
    userId: string,
    userName: string,
    userDate: string,
    userEmail: string
) => {
        db.transaction(function (tx) {
            tx.executeSql(
                "SELECT * FROM table_user where user_id = ?",
                [userId],
                (tx, results) => {
                    let len = results.rows.length;
                    if (len > 0) {
                        alert("Esse usuário já existe!");
                    } else {
                        tx.executeSql(
                            "INSERT INTO table_user (user_id, user_name, user_date, user_email) VALUES (?,?,?,?)",
                            [userId, userName, userDate, userEmail],
                            (tx, results) => {
                                if (results.rowsAffected > 0) {
                                    Alert.alert(
                                        "Sucesso",
                                        "Usuário Registrado com Sucesso !!!",
                                        [
                                            {
                                                text: "Ok",
                                                onPress: () => router.push("/"),
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                } else
                                    alert(
                                        "Erro ao tentar Registrar o Usuário !!!"
                                    );
                            }
                        );
                    }
                }
            );
    });
};
const updateUser = (
    userId: string,
    userName: string,
    userDate: string,
    userEmail: string
) => {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE table_user set user_name=?, user_date=? , user_email=? where user_id=?",
                [userName, userDate, userEmail, userId],
                (tx, results) => {
                    console.log("Results", results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            "Sucesso",
                            "Usuário atualizado com sucesso !!",
                            [
                                {
                                    text: "Ok",
                                    onPress: () => router.back(),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else alert("Erro ao atualizar o usuário");
                }
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

export { createTable, delUser, registerUser, getUser, updateUser, getAllUser };
