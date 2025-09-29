import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
dotenv.config();

const app = express();
const port = 5000;
const localHost = "localhost";

app.use(cors("http://user-manager-app-lilac.vercel.app"));
app.use(bodyParser.json());

app.use("/users", userRouter);
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongdb_connected");
    app.listen(port, localHost, () => {
      console.log(`server is on ${localHost} ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
