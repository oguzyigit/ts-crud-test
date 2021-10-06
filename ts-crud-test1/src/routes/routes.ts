import { Request, Response } from "express";
import { Controller } from "../controller/controller";

class Routes {
    private controller: Controller; constructor() {
        this.controller = new Controller();
    }

    public routes(app): void {
        app.route('/api/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });
        app.route('/api/student')
            .get(this.controller.getAllStudents)
            .post(this.controller.addStudent);
        app.route('/api/student/:studentId')
            .get(this.controller.getStudentById)
            .put(this.controller.updateStudent)
            .delete(this.controller.deleteStudent);
    }
} export { Routes };