import { NoteType } from 'shared';

export type PostNoteType = Omit<NoteType, '_id'>;
export type PatchNoteType = Omit<NoteType, 'date'>;

export type DeleteNoteMessageType = {
  message: string;
};
