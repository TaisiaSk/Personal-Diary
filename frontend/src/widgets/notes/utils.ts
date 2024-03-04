import { NoteType } from 'shared';

const getDateStringFormat = (): string => {
  const date = new Date();

  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('-');
};

export const getFullNote = (text: string): Omit<NoteType, '_id'> => {
  return { date: getDateStringFormat(), text };
};
