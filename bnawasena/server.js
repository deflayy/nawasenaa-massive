import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js"; // Sesuaikan dengan path file Anda
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", contactRoutes); // Rute API untuk kontak

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
