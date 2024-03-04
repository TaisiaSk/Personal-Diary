import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { notesModel } from 'widgets';
import { Button, NoteType } from 'shared';
import './style.scss';

type Props = {
  note: NoteType;
};

const Note: FC<Props> = ({ note }) => {
  const { deleteNote, setDraftNote } = notesModel;
  const navigate = useNavigate();

  const handleClickEdit = () => {
    setDraftNote(note);
    navigate('/draft-note');
  };

  const handleClickDelete = () => {
    deleteNote(note._id);
  };

  return (
    <div className="list-item">
      <div className="list-item__date">
        <p>{note.date}</p>
      </div>
      <div className="list-item__text">
        {/* <p>{note.text}</p> */}
        {note.text.split('\n').map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="list-item__actions">
        <Button isInitialHide onClick={handleClickEdit}>
          Edit
        </Button>
        <Button isInitialHide onClick={handleClickDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export { Note };
