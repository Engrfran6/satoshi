
import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Public/Home";
import { Header } from "./components/Public/Header/Header";

export const UnauthorizedApp = () => {

  const routes = useRoutes([
    { path: "/", element: <Home /> },
  ]);

  return (
    <div className="main-wrapper">
      <Header/>
        { routes }
    </div>
  )
}