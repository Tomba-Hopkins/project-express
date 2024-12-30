import express from "express";

import * as path from "path";

import session from "express-session";

const app = express();

const users = [
  {
    id: 1,
    username: "rocky",
    password: "rocky123",
  },
];

app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/get-session", (req, res) => {
  req.session.log = {
    login: "ok",
  };
  res.redirect("/dashboard");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(404).json({
      status: 404,
      message: "Invalid user",
      attempt: true,
    });
  }
  res.status(200).json({
    status: 200,
    message: "Login succesful",
    attempt: true,
  });
});

app.get("/dashboard", (req, res) => {
  const { log } = req.session;

  if (!log) return res.redirect("/");

  res.render("dashboard");
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(5000, () => console.log("server started on http://localhost:5000"));
