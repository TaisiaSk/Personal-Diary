import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteDraft } from 'widgets';
import { Button } from 'shared';
import '../style.scss';

const DraftNotePage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <main className="main">
      <div className="title">
        <h1>Note</h1>
        <p>initiate new personal reflection</p>
      </div>
      <Button onClick={handleClick}>Go to Notes</Button>
      <NoteDraft />
    </main>
  );
};

export { DraftNotePage };
