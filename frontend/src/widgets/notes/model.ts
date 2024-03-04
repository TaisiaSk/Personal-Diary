import { makeAutoObservable, runInAction } from 'mobx';
import { NoteType, apiDeleteNote, apiGetNotes, apiPatchNote, apiPostNote } from 'shared';
import { getFullNote } from './utils';

class NotesModel {
  notes: NoteType[] = [];
  draftNote: NoteType | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setDraftNote(note: NoteType | null) {
    this.draftNote = note;
  }

  async getNotes() {
    try {
      const response = await apiGetNotes();
      console.log('[CLIENT]: get notes from server');

      runInAction(() => {
        this.notes = response.data;
      });
    } catch (error) {
      console.error(`[CLIENT]: get notes:  ${error}`);
    }
  }

  async addNote(text: string) {
    const newNote = getFullNote(text);

    try {
      const note = await apiPostNote(newNote);
      console.log('[CLIENT]: add note');

      runInAction(() => {
        const newNotes = [...this.notes];
        newNotes.push(note.data);
        this.notes = newNotes;
      });
    } catch (error) {
      console.error(`[CLIENT]: add note: ${error}`);
    }
  }

  async editNote(id: string, text: string) {
    try {
      await apiPatchNote({ _id: id, text });
      console.log('[CLIENT]: edit note');

      runInAction(() => {
        this.notes = this.notes.map((note) => {
          return note._id === id ? { ...note, text } : note;
        });
      });
    } catch (error) {
      console.error(`[CLIENT]: edit note: ${error}`);
    }
  }

  async deleteNote(id: string) {
    try {
      await apiDeleteNote(id);
      console.log('[CLIENT]: delete note');

      runInAction(() => {
        this.notes = this.notes.filter((note) => note._id !== id);
      });
    } catch (error) {
      console.error(`[CLIENT]: delete note: ${error}`);
    }
  }
}

export const notesModel = new NotesModel();
