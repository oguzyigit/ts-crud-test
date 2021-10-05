import { expect } from 'chai';
import app from '../app';
import { agent as request } from 'supertest';

describe("Index Test", () => {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
});

it('should POST /api/student', async function () {
    const res = await request(app)
        .post('/api/student').send({
            "firstName": "testName",
            "lastName": "testLastName",
            "dateOfBirth": "2021-10-02T22:16:59.000Z",
            "courseName": "testCourseName",
            "hours": "25",
            "price": 1234.56
        });
     expect(res.status).to.equal(200);
     expect(res.body).not.to.be.empty;
     expect(res.body.data).not.to.be.empty;
     expect(res.body.data).to.be.an("object");
     expect(res.body.error).to.be.null;
     expect(res.body.data.message).is.equal("Successfully Saved.");
});
it('should GET /student', async function () {
    const res = await request(app).get('/api/student');
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.data).not.to.be.empty;
    expect(res.body.data).to.be.an("array");
    expect(res.body.error).to.be.null;
});
it('should Update last added student', async function () {
    const resultStudent = await request(app).get('/api/student');
    var lastStudentId = resultStudent.body.data[resultStudent.body.data.length - 1].id;
    const res = await request(app)
        .put(`/api/student/${lastStudentId}`).send({
            "firstName": "testNameUpdated",
            "lastName": "testLastNameUpdated",
            "dateOfBirth": "2021-10-02T22:16:59.000Z",
            "courseName": "testCourseNameUpdated",
            "hours": "35",
            "price": 9876.56
        });
     expect(res.status).to.equal(200);
     expect(res.body).not.to.be.empty;
     expect(res.body.data).not.to.be.empty;
     expect(res.body.data).to.be.an("object");
     expect(res.body.error).to.be.null;
     expect(res.body.data.message).is.equal("Successfully Updated.");
});
it('should DELETE last added student', async function () {
    const resultStudent = await request(app).get('/api/student');
    var lastStudentId = resultStudent.body.data[resultStudent.body.data.length - 1].id;
    const res = await request(app).delete(`/api/student/${lastStudentId}`);
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.data).not.to.be.empty;
    expect(res.body.data).to.be.an("object");
    expect(res.body.error).to.be.null;
    expect(res.body.data.message).is.equal("Successfully Removed.");
});