// src/controllers/usercontroller.js

import { Router } from 'express';
import winston from 'winston';

// Configure winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Function to register a new user
export const registerUser = async (req, res) => {
    logger.info('Received request at /api/register', { body: req.body });

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        logger.warn('Missing fields in registration request', { body: req.body });
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Simulate user registration logic
        // Example: Save to database (pseudo-code)
        // await User.create({ username, email, password });

        logger.info('User registered successfully', { username, email });
        return res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        logger.error('Error registering user', { error: error.message, stack: error.stack });
        return res.status(500).json({ message: 'Internal server error' });
    }
};
