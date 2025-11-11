// app/components/BooksList.tsx
'use client';

import { useState, useEffect } from 'react';

// Interfaces para tipar los datos
interface Author {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

interface Book {
  id: number;
  title: string;
  authors: Author[];
}

interface BooksResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}

export default function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://gutendex.com/books/?page=1');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data: BooksResponse = await response.json();
        
        // Obtener los primeros 10 libros
        setBooks(data.results.slice(0, 10));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido al cargar los libros');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Estado de carga
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">Cargando libros...</p>
        </div>
      </div>
    );
  }

  // Estado de error
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 text-xl font-semibold mb-2">Error al cargar los datos</h2>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  // Estado exitoso - mostrar lista
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          📚 Lista de Libros de Gutendex - Prueba Técnica Alvaro Linares
        </h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {books.map((book) => (
              <li key={book.id} className="p-6 hover:bg-gray-50 transition">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h2>
                <div className="text-gray-600">
                  <span className="font-medium">Autor(es):</span>{' '}
                  {book.authors.length > 0 ? (
                    <span>
                      {book.authors[0].name}
                      {book.authors.length > 1 && ` y ${book.authors.length - 1} más`}
                    </span>
                  ) : (
                    <span className="text-gray-400">Autor desconocido</span>
                  )}
                </div>
                <div className="text-sm text-gray-500 mt-1">ID: {book.id}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Mostrando los primeros 10 libros de Gutendex
        </div>
      </div>
    </div>
  );
}