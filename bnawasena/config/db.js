import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost", // Ganti dengan host MySQL Anda
  user: "root", // Ganti dengan user MySQL Anda
  password: "", // Ganti dengan password MySQL Anda
  database: "db_nawasena", // Ganti dengan nama database Anda
});

export default db;
