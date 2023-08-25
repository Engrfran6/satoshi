import {Footer} from '../components/Public/footer/Footer';
import {Navbar} from '../components/Public/navbar/Navbar';

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
