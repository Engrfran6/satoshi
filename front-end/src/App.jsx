import { Home } from "./pages/Public/Home";
import { Company } from "./pages/Public/Company";
import { Crypto } from "./pages/Public/Crypto";
import { Information } from "./pages/Public/Information";
import { Loan } from "./pages/Public/Loan";
import { Pricing } from "./pages/Public/Pricing";
import { RealEstate } from "./pages/Public/RealEstate";
import { Terms } from "./pages/Public/Terms";
import { Login } from "./pages/Public/account/Login";
import { ForgotPassword } from "./pages/Public/account/ForgotPassword";
import { Register } from "./pages/Public/account/Register";
import { useRoutes } from "react-router-dom";
import { Contact } from "./pages/Public/Contact";


import { DHome } from './pages/Dashboard/DHome'
import { Invest } from './pages/Dashboard/Invest'
import { InvestForm } from "./pages/Dashboard/InvestForm";
import { KycApplication } from "./pages/Dashboard/KycApplication";
import { Schemes } from "./pages/Dashboard/Schemes";
import { SchemeDetails } from "./pages/Dashboard/SchemeDetails";
import { Profile } from "./pages/Dashboard/Profile";
import { Welcome } from "./pages/Dashboard/Welcome";
import { KycForm } from "./pages/Dashboard/KycForm";
import { ProfileSetting } from "./pages/Dashboard/ProfileSetting";
import { ProfileActivity } from "./pages/Dashboard/ProfileActivity";
import { ProfileNotify } from "./pages/Dashboard/ProfileNotify";
import { ProfileConnected } from "./pages/Dashboard/ProfileConnected";
import { Withdrawal } from "./pages/Dashboard/transactions/Withdrawal";
import { Deposit } from "./pages/Dashboard/transactions/Deposit";
import { Investing } from "./pages/Dashboard/transactions/Investing";

import { DataProvider } from "./pages/Dashboard/Store/DataProvider";
import { useState } from "react";
import { PublicLayouts } from "./containers/PublicLayouts";
import { DashboardLayouts } from "./containers/DashboardLayouts";



export const App = () => { 
  //  const [token, setToken] = useState();

  // if(!token) {
  //   return  { path: "/login", element: <Login setToken={setToken} /> }
  // }

  // Dashboard routes

  const routes = useRoutes([
    {
      path: '/',
      element: <PublicLayouts />, // Use PublicLayout for public routes
      children: [
        { path: "/", element: <Home /> },
        { path: "/company", element: <Company /> },
        { path: "/crypto", element: <Crypto /> },
        { path: "find-out-more", element: <Information /> },
        { path: "/loans", element: <Loan /> },
        { path: "/our-price", element: <Pricing /> },
        { path: "/realestate", element: <RealEstate /> },
        { path: "/terms-conditions", element: <Terms /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        { path: "/support", element: <Contact /> },
      ],
    },


    {
      path: '/dashboard',
      element: <DashboardLayouts />, // Use DashboardLayout for dashboard routes
      children: [
        { path: "/dashboard", element: <DHome /> },
        { path: "/dashboard/invest", element: <Invest /> },
        { path: "/dashboard/invest-form", element: <InvestForm /> },
        { path: "/dashboard/schemes", element: <Schemes /> },
        { path: "/dashboard/scheme-details", element: <SchemeDetails/> },
        { path: "/dashboard/profile", element: <Profile /> },
        { path: "/dashboard/withdraw", element: <Withdrawal /> },
        { path: "/dashboard/deposit", element: <Deposit /> },
        { path: "/dashboard/investing", element: <Investing /> },
        { path: "/dashboard/welcome", element: <Welcome/> },
        { path: "/dashboard/kyc-application", element: < KycApplication/> },
        { path: "/dashboard/kyc-form", element: <KycForm /> },
        { path: "/dashboard/profile-setting", element: <ProfileSetting /> },
        { path: "/dashboard/profile-activity", element: <ProfileActivity /> },
        { path: "/dashboard/profile-notify", element: <ProfileNotify /> },
        { path: "/dashboard/profile-connected", element: <ProfileConnected /> },
      ],
    },

  ]);


  return  routes
      {/* Dashboard routes */}
      {/* <DashboardLayouts>
        <DataProvider/>
          {dashRoutes}
        <DataProvider/>
      </DashboardLayouts> */}
 }

