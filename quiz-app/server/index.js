import express from "express";
import { config } from "dotenv";
import cors from "cors";
config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/api/create-quiz", async (req, res) => {
  const { id_quiz, quizes } = req.body;
  console.log(id_quiz, quizes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Web started on http://localhost:5000"));
