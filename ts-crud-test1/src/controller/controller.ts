import { Request, Response } from 'express';
import { connection } from "../connection/connection";
import Student from "../entity/Student";

class Controller {
    constructor() { }
    public getAllStudents(req: Request, res: Response) {
        connection
            .then(async connection => {
                const students: Student[] = await connection.manager.find(Student);
                res.json(students);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    } public addStudent(req: Request, res: Response) {
        connection
            .then(async connection => {
                let requestStudent = req.body;
                let student = new Student();
                student.firstName = requestStudent.firstName;
                student.lastName = requestStudent.lastName;
                student.dateOfBirth = requestStudent.dateOfBirth;
                student.courseName = requestStudent.courseName;
                student.hours = requestStudent.hours;
                student.price = requestStudent.price;
                await connection.manager.save(student);
                res.json({ message: "Successfully Saved." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    } public updateStudent(req: Request, res: Response) {
        connection
            .then(async connection => {
                let student = await connection.manager.findOne(Student, req.params.studentId);
                let requestStudent = req.body;
                student.firstName = requestStudent.firstName;
                student.lastName = requestStudent.lastName;
                student.dateOfBirth = requestStudent.dateOfBirth;
                student.courseName = requestStudent.courseName;
                student.hours = requestStudent.hours;
                student.price = requestStudent.price;
                await connection.manager.save(student);
                res.json({ message: "Successfully Updated." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    } public getStudentById(req: Request, res: Response) {
        connection
            .then(async connection => {
                let student = await connection.manager.findOne(Student, req.params.studentId);
                res.json(student)
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    } public deleteStudent(req: Request, res: Response) {
        connection
            .then(async connection => {
                let student = await connection.manager.findOne(Student, req.params.studentId);
                await connection.manager.remove(student); 
                res.json({ message: "Successfully Removed." })
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
} export { Controller }