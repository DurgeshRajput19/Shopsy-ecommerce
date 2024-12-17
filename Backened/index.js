import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import mongoose from "mongoose";

const app = express()
const port = 8000;
const DB_NAME = "Databases"

dotenv.config({
    path: "./.env",
  });

app.use(
  cors({
    origin: process.env.ORIGIN,
    Credential: true,
  })
);

app.use(
  express.json({
    limit: "15kb",
  })
);
console.log(process.env.MONGODB_URI)



mongoose
  .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.error("Failed to connect : " + err));

app.listen(process.env.PORT || port , () => {
    console.log(`your app is running at ${port} `)
}  )  
