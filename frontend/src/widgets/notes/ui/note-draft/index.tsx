import { ChangeEvent, FC, useRef, useState } from 'react';
import { Button } from 'shared';
import './style.scss';

const NoteDraft: FC = () => {
  const [note, setNote] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
        <Button>Done!</Button>
      </div>
    </div>
  );
};

export { NoteDraft };
