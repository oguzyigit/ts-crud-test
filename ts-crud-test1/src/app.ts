import * as express from 'express'
import { Routes } from "./Routes/routes";
const bodyParser = require("body-parser");
const {  handleCors, logStream } = require("./Utils/utils");
const morgan = require("morgan");

class App {
    public app: express.Application;
    public routePrv: Routes; constructor() {
        this.app = express();
        this.app.use(handleCors);
        this.app.use(morgan("combined", { stream: logStream() }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.routePrv = new Routes();
        this.routePrv.routes(this.app);
    }
}
export default new App().app;