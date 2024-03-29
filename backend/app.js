import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import NotesRouter from './routes/notes-router.js';

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 8000;
const MODE = process.env.MODE || 'LOCAL';

const DB_URL =
  MODE === 'LOCAL'
    ? process.env.MONGODB_URI
    : `mongodb://${process.env.MONGODB_SERVER}:${process.env.MONGODB_PORT}/notes`;

mongoose.connection
  .on('connected', () => {
    console.log('Connected to Database');
  })
  .on('error', () => {
    console.log('Database Error');
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/notes', NotesRouter);

app.get('/', (req, res) => {
  res.send('Server start!');
});

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running... on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
