let books = [
    { id: 1, title: "Libro1", author: "Autor1", genre: "Comedia" }
  ];

export const buscar = (req, res) => {
    res.json(books);
  };

export const buscarId = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  
  if (!book) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  
  res.json(book);
};

export const crearLibro = (req, res) => {
  const { title, author, genre } = req.body;

  if (!title || !author || !genre) {
    return res.status(400).json({ 
      error: "Falta ingresar algun campo" 
    });
  }

  const nBook = {
    id: books.length + 1,
    title,
    author,
    genre
  };

  books.push(nBook);
  res.status(201).json(nBook);
};