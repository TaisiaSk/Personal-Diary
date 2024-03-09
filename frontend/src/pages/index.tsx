import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './types';
import { HomePage } from './home/ui';
import { DraftNotePage } from './draft-note/ui';

const routes: RouteData[] = [
  { path: '/', element: <HomePage />, key: 'notes_page' },
  { path: '/draft-note', element: <DraftNotePage />, key: 'draftnote_page' },
];

const Routing: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((props) => (
            <Route {...props} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Routing };
