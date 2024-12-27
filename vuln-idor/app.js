import express from "express";

import * as path from "path";

const app = express();

const users = [
  {
    id: 1,
    name: "Mr. Nasi Goreng",
    identity_number: "1012005",
    img: "",
    city: "Gotham City",
  },
  {
    id: 2,
    name: "Mr. Mie Goreng",
    identity_number: "1012006",
    img: "",
    city: "Pizza City",
  },
  {
    id: 3,
    name: "Mr. Tahu Tek",
    identity_number: "1012006",
    img: "",
    city: "Mineral Town",
  },
  {
    id: 4,
    name: "Mrs. Strawberry",
    identity_number: "1012007",
    img: "",
    city: "Candy City",
  },
  {
    id: 5,
    name: "Sir Batagor",
    identity_number: "1012008",
    img: "",
    city: "Unknown City",
  },
  {
    id: 6,
    name: "FLAG{D0R_K4G3T_G4}",
    identity_number: "1012009",
    img: "",
    city: "Flag City",
  },
];
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));
app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res) => {});

app.listen(5000, () => console.log("Server Running on http://localhost:5000"));
