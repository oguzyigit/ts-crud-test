import { createConnection } from "typeorm";
import Student from "../entity/Student";
export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "test",
    entities: [
        Student
    ],
    synchronize: true,
    logging: false
});