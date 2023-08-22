import {Navbar} from '../components/Public/navbar/Navbar';
import {Footer} from '../components/Public/footer/Footer';
import Navbarn from '../components/Public/nav/Navbarn';

export const PublicLayouts = ({children}) => {
  return (
    <div>
      <Navbar />
      {/* <Navbarn /> */}
      {children}
      <Footer />
    </div>
  );
};
