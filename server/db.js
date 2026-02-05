const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({

  user: process.env.DB_USER || process.env.PG_USER || "postgres",
  password: process.env.DB_PASSWORD || process.env.PG_PASSWORD || "postgres",
  host: process.env.DB_HOST || process.env.PG_HOST || "localhost",
  database: process.env.DB_NAME || process.env.PG_DATABASE || "perntodo",
  port: Number(process.env.DB_PORT || process.env.PG_PORT || 5432),
});

module.exports = pool;