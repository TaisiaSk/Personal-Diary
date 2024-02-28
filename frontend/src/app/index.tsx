import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './types';
import { HomePage } from 'pages';

const routes: RouteData[] = [{ path: '/', element: <HomePage />, key: 'notes_page' }];

const App: FC = () => {
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

export { App };
