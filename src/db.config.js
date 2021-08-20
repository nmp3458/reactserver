var { Client } = require("pg");
// .env file can be use
require("dotenv").config();

const createDatabaseConnection = () => {
  const connectionString = process.env.DATABASE_URL;
  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  client.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  return client;
};

module.exports = createDatabaseConnection;
