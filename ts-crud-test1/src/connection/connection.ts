import { createConnection } from "typeorm";
import Student from "../Entity/Student";
export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    entities: [
        Student     
    ],
    synchronize: true,
    logging: false
});