import { Footer } from "../components/Dashboard/Footer/DashboardFooter"
import { Header } from "../components/Dashboard/Header/DashboardHeader"

export const DashboardLayouts = ({children}) => {
  return (
    <div className="nk-body npc-invest bg-lighter " >
      <div className="nk-app-root">
        <div className="nk-wrap ">
          <Header/>
          {children}
          <Footer/>
        </div>
      </div>
    </div>
  )
}