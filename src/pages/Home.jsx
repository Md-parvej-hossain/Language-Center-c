import Carousel from '../components/Carosol';
import CatacoreData from '../components/CatacoreData';
import ChoageUs from '../components/ChoageUs';
import Status from '../components/Status';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Status />
      <Welcome />
      <CatacoreData />
      <ChoageUs />
    </div>
  );
};

export default Home;
