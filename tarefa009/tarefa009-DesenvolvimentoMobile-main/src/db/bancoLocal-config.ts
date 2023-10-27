import * as SQLite from "expo-sqlite";
import { useState } from "react";

type UserData = {
    id: string;
    name: string;
    dataNasc: string;
    email: string;
};

export function db() {
    const [users, setUsers] = useState<any>();

    const dataBase = SQLite.openDatabase("banco.db");

    const createTable = () => {
        try {
            dataBase.transaction((tx) => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS USERS" +
                        "(ID INTEGER PRIMARY KEY, NOME VARCHAR(50), DATANASC VARCHAR(50), EMAIL VARCHAR(30));"
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    const selectFromTable = () => {
        try {
            dataBase.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM USERS;",
                    [],
                    (_, { rows: _array }) => {
                        console.log("\n Dados da tabela: ", _array);
                        setUsers(_array);
                    }

                    //   error => console.error('Erro ao consultar dados na tabela:', error)
                );
            });
            return users;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    const insertToTable = (data: UserData) => {
        try {
            dataBase.transaction((tx) => {
                tx.executeSql(
                    `INSERT INTO USERS (ID, NOME, DATANASC, EMAIL) VALUES (?,?,?,?)`,
                    [data.id, data.name, data.dataNasc, data.email]
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    return {
        createTable,
        selectFromTable,
        insertToTable,
    };
}
