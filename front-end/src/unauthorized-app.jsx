import {useRoutes} from 'react-router-dom';
import {PublicLayouts} from './containers/PublicLayouts';
import {PublicHome} from './pages/Public/PublicHome';
import {Crypto} from './pages/Public/Crypto';
import {RealEstate} from './pages/Public/RealEstate';
import {Loan} from './pages/Public/Loan';
import {Pricing} from './pages/Public/Pricing';
import {Company} from './pages/Public/Company';
import {Terms} from './pages/Public/Terms';
import {Contact} from './pages/Public/Contact';
import {Information} from './pages/Public/Information';
import {Login} from './pages/Public/account/Login';
import {Register} from './pages/Public/account/Register';
import {ForgotPassword} from './pages/Public/account/ForgotPassword';
import {AdminRegister} from './pages/Public/account/AdminRegister';

export const UnauthorizedApp = () => {
  const routes = useRoutes([
    {path: '/home', element: <PublicHome />},
    {path: '/crypto', element: <Crypto />},
    {path: '/realestate', element: <RealEstate />},
    {path: '/loan', element: <Loan />},
    {path: '/pricing', element: <Pricing />},
    {path: '/company', element: <Company />},
    {path: '/teams', element: <Terms />},
    {path: '/information', element: <Information />},
    {path: '/contact', element: <Contact />},
    {path: '/account/login', element: <Login />},
    {path: '/account/register', element: <Register />},
    {path: '/account/forgot-password', element: <ForgotPassword />},
    {path: '/account/admin/register', element: <AdminRegister />},
    {path: '*', element: <PublicHome />},
  ]);

  return (
    <div className="main-wrapper">
      <PublicLayouts>{routes}</PublicLayouts>
    </div>
  );
};
