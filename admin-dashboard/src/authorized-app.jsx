import {useRoutes} from 'react-router-dom';

import {Home} from './pages/Home';
import {SideNav} from './components/sidenav/SideNav';
import {Footer} from './components/Footer';
import {Header} from './components/header/Header';
import {UserList} from './pages/UsersList';
import {InvestmentList} from './pages/Investments';
import {DepositList} from './pages/Deposits';
import {WithdrawalList} from './pages/Withdrawals';
import {PackageList} from './pages/Packages';
import {Banks} from './pages/userAccounts/Banks';
import {Btcs} from './pages/userAccounts/Btcs';
import {Usdts} from './pages/userAccounts/Usdts';
import {CompanyBanks} from './pages/companyAccounts/Banks';
import {CompanyBtcs} from './pages/companyAccounts/Btcs';
import {CompanyUsdts} from './pages/companyAccounts/Usdts';

export const AuthorizedApp = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/users', element: <UserList />},
    {path: '/investments', element: <InvestmentList />},
    {path: '/deposits', element: <DepositList />},
    {path: '/withdrawals', element: <WithdrawalList />},
    {path: '/packages', element: <PackageList />},
    {path: '/bank', element: <Banks />},
    {path: '/btc', element: <Btcs />},
    {path: '/usdt', element: <Usdts />},
    {path: '/companybank', element: <CompanyBanks />},
    {path: '/companybtc', element: <CompanyBtcs />},
    {path: '/companyusdt', element: <CompanyUsdts />},
    {path: '*', element: <Home />},
  ]);

  return (
    <>
      <SideNav />
      <main class="main-content">
        <Header />
        <div className="content-inner pb-0 container-fluid" id="page_layout">
          {routes}
        </div>
        <Footer />
      </main>
    </>
  );
};
