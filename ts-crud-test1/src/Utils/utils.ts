const fs = require("fs");
const path = require("path");

const handleCors= (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Access, Authorization");

    //Browser always send an options request first. If that's the case let's allow browser to send following requests.
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json();
    }
    next();
},
logStream = () => {
    return fs.createWriteStream(path.join(__dirname, "./access.log"), { flags: "a" });
};

module.exports = {handleCors, logStream };