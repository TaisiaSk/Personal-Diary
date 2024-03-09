import mongoose from 'mongoose';

const Note = new mongoose.Schema({
  date: { type: String, required: true },
  text: { type: String, required: true },
});

export default mongoose.model('Note', Note);
