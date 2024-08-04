import cors from "cors";
import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "new_password",
  database: "KSkinGlow",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM products";
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching products");
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
