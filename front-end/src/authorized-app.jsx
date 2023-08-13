import {useRoutes} from 'react-router-dom';
import {DHome} from './pages/Dashboard/DHome';
import {DashboardLayouts} from './containers/DashboardLayouts';
import {Invest} from './pages/Dashboard/Invest';
import {InvestForm} from './pages/Dashboard/InvestForm';
import {KycForm} from './pages/Dashboard/KycForm';
import {KycApplication} from './pages/Dashboard/KycApplication';
import {ProfileNotify} from './pages/Dashboard/ProfileNotify';
import {ProfileActivity} from './pages/Dashboard/ProfileActivity';
import {ProfileConnected} from './pages/Dashboard/ProfileConnected';
import {ProfileSetting} from './pages/Dashboard/ProfileSetting';
import {SchemeDetails} from './pages/Dashboard/SchemeDetails';
import {Schemes} from './pages/Dashboard/Schemes';

export const AuthorizedApp = () => {
  const routes = useRoutes([
    {path: '/dashboard', element: <DHome />},
    {path: '/dashboard/invest', element: <Invest />},
    {path: '/dashboard/invest-form', element: <InvestForm />},
    {path: '/dashboard/kyc-form', element: <KycForm />},
    {path: '/dashboard/kyc-application', element: <KycApplication />},
    {path: '/dashboard/notify', element: <ProfileNotify />},
    {path: '/dashboard/profile-activities', element: <ProfileActivity />},
    {path: '/dashboard/profile-connected', element: <ProfileConnected />},
    {path: '/dashboard/profile-notify', element: <ProfileNotify />},
    {path: '/dashboard/settings', element: <ProfileSetting />},
    {path: '/dashboard/schemes', element: <Schemes />},
    {path: '/dashboard/schemes-details', element: <SchemeDetails />},
  ]);

  return (
    <div className="main-wrapper">
      <DashboardLayouts>{routes}</DashboardLayouts>
    </div>
  );
};
