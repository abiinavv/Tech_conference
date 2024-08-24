import express from 'express';
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../controllers/bookcontroller.js';
import { authenticateToken } from '../middleware/auth.js';  // Correct import for named export

const router = express.Router();

// Use `authenticateToken` for authentication middleware
router.post('/', authenticateToken, createBook);
router.get('/', authenticateToken, getBooks);
router.get('/:id', authenticateToken, getBookById);
router.put('/:id', authenticateToken, updateBook);
router.delete('/:id', authenticateToken, deleteBook);

export default router;


