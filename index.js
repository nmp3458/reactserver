const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/route");

const port = process.env.PORT || 3000;
const staticRoot = require("path").join(__dirname, "", "build");

// .env file can be use
require("dotenv").config();

const initializeExpress = (irouter) => {
  const app = express();

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

  app.use(express.static(staticRoot));

  app.get("*", (req, res) => {
    res.sendFile(__dirname + 'build/index.html');
  });

  app.listen(port, () => {
    console.log("app listening at port", port);
  });
};

initializeExpress(router);
