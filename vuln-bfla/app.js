import express from "express";

import * as path from "path";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(path.join(import.meta.dirname, "public"));

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.listen(5000, () => console.log("server started on http://localhost:5000"));
