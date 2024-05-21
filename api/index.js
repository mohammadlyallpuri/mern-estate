import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error:', err.message);
    });

const app = express();

// Use the user router
app.use('/api/user', userRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
