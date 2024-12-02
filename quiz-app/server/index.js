import express from "express";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Quiz from "./models/quizModel.js";
import expressRateLimit from "express-rate-limit";

config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Error ", err));

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// middleware
const rateLimiter = expressRateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: "Too many req",
});

app.post("/api/create-quiz", rateLimiter, async (req, res) => {
  const { id_quiz, quizes } = req.body;
  const quiz = new Quiz({
    id_quiz,
    quizes,
  });
  await quiz.save();

  res.status(201).json({
    message: "New data",
    status: 201,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Web started on http://localhost:5000"));
