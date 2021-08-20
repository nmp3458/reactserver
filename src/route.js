var express = require("express");
var app = express();

const createDatabaseConnection = require("./db.config");

const sqldb = createDatabaseConnection();

app.post("/authenticate", (req, res) => {
  sqldb.query(
    `select * from users where sso = $1 and password = $2`,
    [req.body.sso, req.body.password],
    (error, results) => {
      if (results && results.rows.length > 0) {
        res.send(true);
      } else {
        res.status(401).send(false);
      }
    }
  );
});

app.get("/products", (req, res, next) => {
  sqldb.query("SELECT * FROM cars ORDER BY id Asc", (error, results) => {
    if (results && results.rows.length > 0) {
      res.send(results.rows);
    }
  });
});

app.get("/searchByKey", (req, res) => {
  sqldb.query(
    `SELECT * FROM cars WHERE name ILIKE $1`,
    ["%" + req.query.search + "%"],
    (error, results) => {
      if (results) {
        res.send(results.rows);
      }
    }
  );
});

app.post("/add", (req, res) => {
  const product = req.body;
  console.log(product);
  sqldb.query(
    `INSERT INTO cars(name,company, price, fueltype, mileage, automatic) VALUES ($1,$2,$3,$4,$5,$6)`,
    [
      product.name,
      product.company,
      product.price,
      product.fueltype,
      product.mileage,
      product.automatic,
    ],
    (error, results) => {
      if (error) {
        res.status(501).send(false);
      } else {
        res.send(true);
      }
    }
  );
});

module.exports = app;
