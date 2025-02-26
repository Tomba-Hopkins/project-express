import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("test done");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == "nasgorman" && password == "fried_egg") {
    return res
      .json({
        status: 200,
        message: "ok",
      })
      .status(200);
  }

  return res
    .json({
      status: 404,
      message: "Ga ok",
    })
    .status(404);
});

app.listen(3000, () => console.log(`run on http://127.0.0.1:3000`));
