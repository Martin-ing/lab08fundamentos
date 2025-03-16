let books = [
    { id: 1, title: "Libro1", author: "Autor1", genre: "Comedia" }
  ];

export const buscar = (req, res) => {
    res.json(books);
  };
