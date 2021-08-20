var { Client } = require("pg");

const createDatabaseConnection = () => {
  const connectionString = process.env.DATABASE_URL;
  const client = new Client({ connectionString });
  client.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  return client;
};

module.exports = createDatabaseConnection;
