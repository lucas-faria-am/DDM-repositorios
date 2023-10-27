import * as SQLite from 'expo-sqlite';

type UserData = {
    name: string;
    sobreNome: string;
    email: string;
};

export function db() {
    const dataBase = SQLite.openDatabase('banco.db');

    const createTable = () => {
        try {
            dataBase.transaction(tx => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS USER" +
                        "(ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME VARCHAR(50), SOBRENOME VARCHAR(50), EMAIL VARCHAR(30));"
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    const insertToTable = (data: UserData) => {
        try {
            dataBase.transaction((tx) => {
                tx.executeSql(
                    `INSERT INTO USER (NOME, SOBRENOME, EMAIL) VALUES (?,?,?)`, [data.name, data.sobreNome, data.email]
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    return {
        createTable,
        insertToTable
    };
}
