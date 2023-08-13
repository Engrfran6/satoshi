import {Header} from '../../components/Public/Header/Header';
import {About} from '../../components/Public/about/About';
import {About2} from '../../components/Public/about/About2';
import {Banner} from '../../components/Public/banner/Banner';
import {Contact} from '../../components/Public/contacts/Contact';
import {NewIdea2} from '../../components/Public/ideas/NewIdea2';
import {NewIdeas} from '../../components/Public/ideas/NewIdeas';
import {LiveDisplay} from '../../components/Public/liveCryptoDisplay/LiveDisplay';
import {OtherServices} from '../../components/Public/otherservices/OtherServices';
import {Passions} from '../../components/Public/passions/Passions';
import {Services} from '../../components/Public/services/Services';
import {Services2} from '../../components/Public/services/Services2';
import {Services3} from '../../components/Public/services/Services3';
import {Teams} from '../../components/Public/team/Teams';
import {Testimonies} from '../../components/Public/testimony/Testimonies';
import {Tabs} from '../../components/Public/verticalTabs/Tabs';
import {Tabs2} from '../../components/Public/verticalTabs/Tabs2';
import {Video} from '../../components/Public/videoSession/Video';

export const PublicHome = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <LiveDisplay />
      <About />
      <Services />
      <OtherServices />
      <NewIdea2 />
      <Services3 />
      <NewIdeas />
      <Services2 />
      <Video />
      <Passions />
      <Banner />
      <Tabs2 />
      <About2 />
      <Tabs />
      {/* <Testimonies /> */}
      {/* <Teams /> */}
      <Contact />
    </div>
  );
};
