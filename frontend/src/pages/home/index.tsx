import { FC } from 'react';
import { Button } from 'shared';
import { NotesList } from 'widgets';
import './style.scss';

const HomePage: FC = () => {
  return (
    <main className="main">
      <div className="title">
        <h1>My notes</h1>
        <p>finding meaning in the mundane through reflection and self-discovery</p>
      </div>
      <Button>Add New</Button>
      <NotesList />
    </main>
  );
};

export { HomePage };
