import * as express from 'express'
import { Routes } from "./routes/routes";
import bodyParser = require("body-parser");

class App {
    public app: express.Application;
    public routePrv: Routes; constructor() {// initializing express in this application
        this.app = express();// support application/json type post data
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Access, Authorization");

            //Browser always send an options request first. If that's the case let's allow browser to send following requests.
            if (req.method === "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
                return res.status(200).json();
            }
            next();
        });
        this.app.use(bodyParser.json());//support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));// for routing the http request to controller
        this.routePrv = new Routes();
        this.routePrv.routes(this.app);
    }
}
export default new App().app;