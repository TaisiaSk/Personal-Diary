import { FC } from 'react';
import { Button } from 'shared';
import './style.scss';

type Props = {
  date: string;
  text: string;
};

const Note: FC<Props> = ({ date, text }) => {
  return (
    <div className="list-item">
      <div className="list-item__date">
        <p>{date}</p>
      </div>
      <div className="list-item__text">
        <p contentEditable>{text}</p>
      </div>
      <div className="list-item__actions">
        <Button isInitialHide>Edit</Button>
        <Button isInitialHide>Delete</Button>
      </div>
    </div>
  );
};

export { Note };
