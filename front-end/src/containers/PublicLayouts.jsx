import {Navbar} from '../components/Public/navbar/Navbar';
import {Footer} from '../components/Public/footer/Footer';

export const PublicLayouts = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
