import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import * as dotenv from "dotenv";
import fs from "fs";

// LOAD ENV VARIABLES
if (fs.existsSync(".env")) {
  console.log("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  console.warn("Missing env file!");
}

const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:user@cluster0.ajzytwg.mongodb.net/?retryWrites=true&w=majority";
console.log("MONGODB_URL", process.env.MONGODB_URL);

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
