import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesList } from 'widgets';
import { Button } from 'shared';
import '../style.scss';

const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/draft-note');
  };

  return (
    <main className="main">
      <div className="title">
        <h1>My notes</h1>
        <p>finding meaning in the mundane through reflection and self-discovery</p>
      </div>
      <Button onClick={handleClick}>Add New</Button>
      <NotesList />
    </main>
  );
};

export { HomePage };
