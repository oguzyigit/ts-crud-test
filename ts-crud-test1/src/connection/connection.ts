import { createConnection } from "typeorm";
import Student from "../entity/Student";
export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "dbmali",
    entities: [
        // typeORM will not be able to create database table if we forget to put entity class name here..
        Student      // our Student entity class
    ],
    synchronize: true,
    logging: false
});