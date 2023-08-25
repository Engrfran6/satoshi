import { useRoutes } from "react-router-dom";

import { Home } from "./pages/Home";
import { SideNav } from "./components/sidenav/SideNav";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import { UserList } from "./pages/UsersList";
import { Transaction } from "./pages/Transactions";
import { Bundles } from "./pages/Bundles";
import { Stakes } from "./pages/Stakes";
import { Campaign } from "./pages/Campaign";


export const AuthorizedApp = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList /> },
    { path: "/transactions", element: <Transaction /> },
    { path: "/bundles", element: <Bundles /> },
    { path: "/stakes", element: <Stakes /> },
    { path: "/campaign", element: <Campaign /> },
    { path: "*", element: <Home /> }
  ]);

  return (
    <>
      <SideNav />
      <main class="main-content">
          <Header />
          <div className="content-inner pb-0 container-fluid" id="page_layout">
            { routes }
          </div>
        <Footer />
      </main>
    </>
  );
}