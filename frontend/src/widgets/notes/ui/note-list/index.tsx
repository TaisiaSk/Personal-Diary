import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Note } from '../note';
import './style.scss';
import { notesModel } from 'widgets';

const ONotesList: FC = () => {
  const { notes, getNotes } = notesModel;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="list">
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export const NotesList = observer(ONotesList);
