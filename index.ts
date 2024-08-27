import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import noteRoute from './src/routes/noteController';

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app: Application = express();

// Middleware

app.use(express.json()); // Parse incoming JSON requests
app.use("/notes", noteRoute)

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Express API!' });
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
