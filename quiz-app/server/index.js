import express from "express";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home",
    status: 200,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Web started on http://localhost:5000"));
