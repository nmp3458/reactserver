const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./src/route");

// .env file can be use
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

const initializeExpress = (irouter) => {
  app.use(cors());
  // parse application/json
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(cookieParser());

  app.use("/api", irouter);

  const root = require("path").join(__dirname, "", "build");

  app.use(express.static(root));

  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });

  app.listen(port, () => {
    console.log("app listening at port", port);
  });
};

initializeExpress(router);
