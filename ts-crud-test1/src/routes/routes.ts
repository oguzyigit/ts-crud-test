import {Request, Response} from "express";
import {Controller} from "../controller/Controller";class Routes {    private controller: Controller;    constructor() {
        this.controller = new Controller();
    }    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });// following code is to handle http://localhost:3000/student request.
        app.route('/student')
            .get(this.controller.getAllStudents)
            .post(this.controller.addStudent);        // following code is to handle http://localhost:3000/student/{studentId} request.
        app.route('/student/:studentId')
            .get(this.controller.getStudentById)
            .put(this.controller.updateStudent)
            .delete(this.controller.deleteStudent);    }
}export {Routes};