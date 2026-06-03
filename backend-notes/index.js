const express = require("express");
const app = express();

const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

// 👇 Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "dist")));

let notes = [
  {
    id: 1,
    content: "HTML is easy perhaps",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

// ✅ RUTAS API
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);

  res.status(204).end();
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (req, res) => {
  const body = req.body;

  if (!body.content) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  };

  notes = notes.concat(note);
  res.json(note);
});

// 👇 IMPORTANTE: fallback para frontend (SPA)
// ⚠️ Va SIEMPRE después de las rutas /api
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html")); // ← cambio aquí
});

// 👇 Puerto para Render
const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
