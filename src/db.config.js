var { Client } = require("pg");

const createDatabaseConnection = () => {
  const connectionString = "postgres://postgres:mydb@localhost:2504/postgres";
  const client = new Client({ connectionString });
  client.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  return client;
};

module.exports = createDatabaseConnection;
