import Carousel from '../components/Carosol';
import CatacoreData from '../components/CatacoreData';
import ChoageUs from '../components/ChoageUs';
import OurTeaching from '../components/OurTeaching';
import Status from '../components/Status';
import UpcamingCourcess from '../components/UpcamingCourcess';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Status />
      <Welcome />
      <CatacoreData />
      <ChoageUs />
      <UpcamingCourcess />
      <OurTeaching />
    </div>
  );
};

export default Home;
