import { AxiosPromise } from 'axios';
import apiInstance from '../base';
import { PostNoteType, PatchNoteType, DeleteNoteMessageType } from './types';
import { NoteType } from '../../types';

const BASE_URL = '/notes';

export const apiGetNotes = (): AxiosPromise<NoteType[]> => {
  return apiInstance.get(BASE_URL);
};

export const apiPostNote = (body: PostNoteType): AxiosPromise<NoteType> => {
  return apiInstance.post(BASE_URL, body);
};

export const apiPatchNote = (data: PatchNoteType): AxiosPromise<NoteType> => {
  const { _id, text } = data;
  return apiInstance.patch(`${BASE_URL}/${_id}`, { text });
};

export const apiDeleteNote = (id: string): AxiosPromise<DeleteNoteMessageType> => {
  return apiInstance.delete(`${BASE_URL}/${id}`);
};
