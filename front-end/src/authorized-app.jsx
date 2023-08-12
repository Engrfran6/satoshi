

import { useRoutes } from "react-router-dom";
import { DHome } from "./pages/Dashboard/DHome";
import { DashboardLayouts } from "./containers/DashboardLayouts";


export const AuthorizedApp = () => {

  const routes = useRoutes([
    { path: "/dashboard", element: <DHome /> },
  ]);

  return (
    <div className="main-wrapper">
      <DashboardLayouts>
        { routes }
      </DashboardLayouts>

    </div>
  )
}