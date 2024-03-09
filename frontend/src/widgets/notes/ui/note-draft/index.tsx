import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { notesModel } from 'widgets';
import { Button } from 'shared';
import './style.scss';

const ONoteDraft: FC = () => {
  const { draftNote, addNote, editNote, setDraftNote } = notesModel;

  const [note, setNote] = useState<string>(draftNote ? draftNote.text : '');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    changeHeight();
  }, []);

  const changeHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
    changeHeight();
  };

  const handleClick = () => {
    if (draftNote) {
      editNote(draftNote._id, note);
      setDraftNote(null);
    } else {
      note && addNote(note);
    }
    navigate('/');
  };

  return (
    <div className="draft">
      <div className="draft__input">
        <textarea
          value={note}
          ref={textareaRef}
          onChange={handleChange}
          className="note-textarea"
          name="note"
          placeholder="Write your new thought..."
          autoFocus
          wrap="cols"
          spellCheck="false"
        />
      </div>
      <div className="draft__add">
        <Button onClick={handleClick}>Done!</Button>
      </div>
    </div>
  );
};

export const NoteDraft = observer(ONoteDraft);
