import express from 'express';
import dotenv from 'dotenv';
import booksRouter from './routes/books.js'; // Ensure this path is correct
import authMiddleware from './middleware/auth.js';
import userRoutes from './routes/userRoutes.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use('/api', userRoutes);

// Routes with authentication middleware applied
app.use('/api/books', authMiddleware, booksRouter); // Apply authMiddleware to /api/books routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
