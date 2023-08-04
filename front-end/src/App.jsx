import { useRoutes } from "react-router-dom";

import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Home } from "./pages/home"
import { About } from "./pages/About";

export const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);
  return (
    <>
      <div className="main-wrapper">

        <Header />

          { routes }

        <Footer />        
      </div>
    </>
  )
}
