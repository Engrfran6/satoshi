import {useRoutes} from 'react-router-dom';
import {Login} from './pages/Login';

export const UnauthorizedApp = () => {
  const routes = useRoutes([
    {path: '/admin', element: <Login />},
    {path: '*', element: <Login />},
  ]);

  return (
    <>
      <>{routes}</>
    </>
  );
};
