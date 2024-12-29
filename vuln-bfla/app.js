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
const recipes = [
  {
    id: 1,
    name: "Nasgor",
    description: "1kg nasi, 2kg ayam, 8 butir telur",
  },
  {
    id: 2,
    name: "Mie goreng",
    description: "1kg mie, 2kg ayam, 8 butir telur",
  },
  {
    id: 3,
    name: "Bubur ayam",
    description: "1kg ikan, 2kg ayam, 8 butir telur",
  },
];

app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(
  session({
    secret: "keyboard-cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const mustBeUser = (req, res, next) => {
  const user = req.session.orang;
  if (!user) return res.redirect("/");
  next();
};

const mustBeChef = (req, res, next) => {
  const user = req.session.orang;
  if (user.role !== "admin") return res.render("unauthorize");
  next();
};

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
    return res.redirect("/");
  }
  req.session.orang = {
    id: user.id,
    username: user.username,
    password: user.password,
    role: role,
  };
  res.json({
    status: 200,
    message: "success",
  });
});

app.get("/dashboard", mustBeUser, (req, res) => {
  res.render("dashboard", {
    recipes,
  });
});
app.get("/create-recipe", mustBeUser, mustBeChef, (req, res) => {
  res.render("create-recipe");
});

app.post("/create-recipe", mustBeUser, (req, res) => {
  const { name, description } = req.body;
  const newRecipe = {
    id: recipes.length + 1,
    name,
    description,
  };

  recipes.push(newRecipe);
  res.json({
    status: 201,
    message: "New recipe added",
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(5000, () => console.log("server started on http://localhost:5000"));
