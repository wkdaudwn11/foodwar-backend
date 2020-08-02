import express from "express";
import bodyParser from "body-parser";
import userRouter from "./api/v1.0/routes/useRouter";
import dotenv from "dotenv";
dotenv.config();

const APP_PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1.0/user", userRouter);

app.listen(APP_PORT);
console.log("Webserver listening to port", APP_PORT);
