import express from "express";
import { buscar } from "./crud/crud.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Error interno del servidor" });
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });

app.get("/books", buscar);
