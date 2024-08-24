import supabase from '../config/supabase.js';

// Create a new book
export const createBook = async (req, res) => {
  const { title, author, genre, published_date } = req.body;
  const { data, error } = await supabase
    .from('books')
    .insert([{ title, author, genre, published_date }]);
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

// Get all books
export const getBooks = async (req, res) => {
  const { data, error } = await supabase
    .from('books')
    .select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Get a book by ID
export const getBookById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('id', id)
    .single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Update a book by ID
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, published_date } = req.body;
  const { data, error } = await supabase
    .from('books')
    .update({ title, author, genre, published_date })
    .eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('books')
    .delete()
    .eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

