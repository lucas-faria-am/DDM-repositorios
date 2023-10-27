import SQLite from "react-native-sqlite-storage";

type UserData = {
    name: string;
    sobreNome: string;
    email: string;
};

export function db() {
    const dataBase = SQLite.openDatabase(
        {
            name: "BancoPrincipal",
            location: "default",
        },
        () => {},
        (error) => {
            console.log(error);
        }
    );

    const createTable = () => {
        try {
            dataBase.transaction((tx) => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS USER" +
                        "(ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME VARCHAR(50), SOBRENOME VARCHAR(50), EMAIL VARCHAR(30));"
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    const insertToTable = (data: any) => {
        try {
            dataBase.transaction((tx) => {
                tx.executeSql(
                    `INSERT INTO USER (NOME, SOBRENOME, EMAIL) VALUES ('${data.email}','${data.sobreNome}','${data.email}');`
                );
            });
        } catch (error) {
            console.error(error);
        }
    };

    return {
        createTable,
        insertToTable,
    };
}
