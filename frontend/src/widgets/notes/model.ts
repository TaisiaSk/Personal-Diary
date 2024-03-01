import { makeAutoObservable } from 'mobx';
import { NoteType } from 'shared';
import { getFullNote } from './utils';

const dataNotes: NoteType[] = [
  { _id: '0', date: '20-02-2024', text: 'finding meaning in the mundane through reflection and self-discovery' },
  { _id: '1', date: '15-01-2024', text: 'finding meaning in the mundane through reflection and self-discovery' },
  { _id: '2', date: '01-01-2024', text: 'finding meaning in the mundane through reflection and self-discovery' },
];

class NotesModel {
  notes: NoteType[] = dataNotes;
  draftNote: NoteType | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setDraftNote(note: NoteType | null) {
    this.draftNote = note;
  }

  addNote(text: string) {
    this.notes.push(getFullNote(text));
  }

  editNote(id: string, text: string) {
    this.notes = this.notes.map((item) => {
      return id === item._id ? { ...item, text } : item;
    });
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note._id !== id);
  }
}

export const notesModel = new NotesModel();
