import { Header } from "../components/Public/Header/Header";
import { Footer } from "../components/Public/Footer/Footer";

export const PublicLayouts = ({children}) => {

  return (
    <div>
      <Header/>
       {children}
      <Footer/>
    </div>
  )
}