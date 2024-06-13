import express from "express";
import db from "../config/db.js"; // Sesuaikan dengan path file konfigurasi database Anda

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const [result] = await db.execute(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    res.status(201).json({ message: "Pesan berhasil dikirim!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengirim pesan." });
  }
});

export default router;
