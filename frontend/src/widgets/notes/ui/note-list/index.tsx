import { FC } from 'react';
import { Note } from '../note';
import './style.scss';

const NotesList: FC = () => {
  return (
    <div className="list">
      <Note date="23-02-2023" text="finding meaning in the mundane through reflection and self-discovery" />
      <Note date="23-02-2023" text="finding meaning in the mundane through reflection and self-discovery" />
      <Note date="23-02-2023" text="finding meaning in the mundane through reflection and self-discovery" />
    </div>
  );
};

export { NotesList };
