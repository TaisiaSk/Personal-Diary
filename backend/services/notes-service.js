import Note from '../models/note-model.js';

class NotesService {
  async create(note) {
    const newNote = await Note.create(note);
    console.log(`Create new note with date: ${note.date}`);
    return newNote;
  }

  async read() {
    const notes = await Note.find();
    console.log(`Get ${notes.length} notes`);
    return notes;
  }

  async delete(id) {
    if (!id) {
      throw new Error('id not specified');
    }
    const note = await Note.findByIdAndDelete(id);
    console.log(`Delete note with text: ${note.text}`);
    return note;
  }

  async update(id, text) {
    if (!id) {
      throw new Error('id not specified');
    }
    const note = await Note.findByIdAndUpdate(id, { text }, { new: true });
    console.log(`Edit note with new text: ${note.text}`);
    return note;
  }
}

export default new NotesService();
