import bcrypt from "bcrypt";
import db from "./config/db.js";

const insertAdminUser = async () => {
  const username = "admin";
  const password = "admin123";
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO admin_users (username, password) VALUES (?, ?)`;
  db.query(sql, [username, hashedPassword], (err, result) => {
    if (err) throw err;
    console.log("Admin user inserted");
    process.exit();
  });
};

insertAdminUser();
