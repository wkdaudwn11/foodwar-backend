import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const APP_PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/sayHello", function (req: express.Request, res: express.Response) {
  res.send("Hello from the foodwar back-end!!!");
});

app.listen(APP_PORT);
console.log("Webserver listening to port", APP_PORT);
