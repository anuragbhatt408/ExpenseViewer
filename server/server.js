import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;
const app = express();

app.use(cors());

await mongoose.connect(
  "mongodb+srv://anuragbhatt:Qwertyuiop1@expense-viewer.9k1tjq8.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDb Connection is successful");

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(PORT, () => {
  console.log("Server is Running on http://localhost:4000");
});
