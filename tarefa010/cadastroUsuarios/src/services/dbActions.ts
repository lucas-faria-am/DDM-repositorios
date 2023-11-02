import { UserProps } from "../@types/UserProps";
import { DatabaseConnection } from "../database/database-connection";

const db = DatabaseConnection.getConnection();

const createTable = (): void => {
    db.transaction(function (txn) {
        txn.executeSql(
            "CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY, user_name VARCHAR(20), user_date VARCHAR(20), user_email VARCHAR(30))",
            []
        );
    });
};

export { createTable };
