import express from "express";
import session from "express-session";

import * as path from "path";

const app = express();

const users = [
  {
    id: 1,
    username: "rocky",
    password: "rocky123",
  },
  {
    id: 2,
    username: "admin",
    password: "admin123",
  },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(
  session({
    secret: "keyboard-cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password, role } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    res.redirect("/");
  }

  req.session.orang = {
    id: user.id,
    username: user.username,
    password: user.password,
    role: role,
  };

  res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
  const user = req.session.orang;

  if (!user) return res.redirect("/");

  res.render("dashboard", {
    user,
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(5000, () => console.log("server started on http://localhost:5000"));
