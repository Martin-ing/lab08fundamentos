import express from "express";
import { buscar } from "./crud/crud.js";
import { buscarId } from "./crud/crud.js";
import { crearLibro } from "./crud/crud.js";
import { actualizarLibro } from "./crud/crud.js";
import { eliminarLibro } from "./crud/crud.js";
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
app.get("/books/:id", buscarId);
app.post("/books", crearLibro);
app.put("/books/:id", actualizarLibro);
app.delete("/books/:id", eliminarLibro);
