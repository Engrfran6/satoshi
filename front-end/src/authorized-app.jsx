import {useRoutes} from 'react-router-dom';
import {DHome} from './pages/Dashboard/DHome';
import {DashboardLayouts} from './containers/DashboardLayouts';
import {Invest} from './pages/Dashboard/Invest';
import {InvestForm} from './pages/Dashboard/InvestForm';
import {KycForm} from './pages/Dashboard/KycForm';
import {KycApplication} from './pages/Dashboard/KycApplication';
import {ProfileNotify} from './pages/Dashboard/ProfileNotify';
import {ProfileSetting} from './pages/Dashboard/ProfileSetting';
import {ProfileActivity} from './pages/Dashboard/ProfileActivity';
import {ProfileConnected} from './pages/Dashboard/ProfileConnected';
import {SchemeDetails} from './pages/Dashboard/SchemeDetails';
import {Schemes} from './pages/Dashboard/Schemes';
import {Profile} from './pages/Dashboard/Profile';
import {Welcome} from './pages/Dashboard/Welcome';
import {Deposit} from './pages/Dashboard/transactions/Deposit';
import {Withdrawal} from './pages/Dashboard/transactions/Withdrawal';
import {Investment} from './pages/Dashboard/transactions/Investing';
import {SuccessMessage} from './pages/Dashboard/transactions/SuccessMessage';
import {Support} from './pages/Dashboard/Support';

export const AuthorizedApp = () => {
  const routes = useRoutes([
    {path: '/dashboard', element: <DHome />},
    {path: '/dashboard/invest', element: <Invest />},
    {path: '/dashboard/welcome', element: <Welcome />},
    {path: '/dashboard/invest-form', element: <InvestForm />},
    {path: '/dashboard/kyc-form', element: <KycForm />},
    {path: '/dashboard/kyc-application', element: <KycApplication />},
    {path: '/dashboard/profile-activity', element: <ProfileActivity />},
    {path: '/dashboard/profile-setting', element: <ProfileSetting />},
    {path: '/dashboard/profile-connected', element: <ProfileConnected />},
    {path: '/dashboard/profile-notify', element: <ProfileNotify />},
    {path: '/dashboard/profile', element: <Profile />},
    {path: '/dashboard/schemes', element: <Schemes />},
    {path: '/dashboard/scheme-details', element: <SchemeDetails />},
    {path: '/dashboard/deposit', element: <Deposit />},
    {path: '/dashboard/withdraw', element: <Withdrawal />},
    {path: '/dashboard/investing', element: <Investment />},
    {path: '/dashboard/successful', element: <SuccessMessage />},
    {path: '/dashboard/support', element: <Support />},
    {path: '*', element: <DHome />},
  ]);

  return (
    <div className="main-wrapper">
      <DashboardLayouts>{routes}</DashboardLayouts>
    </div>
  );
};
