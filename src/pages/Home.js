import Lineas from '../components/LineasTodas/Lineas';
import BackgroundImage from '../components/BackgroundImage/BackgroundImage';
import Footer from '../components/Footer/Footer';
import Servicios from '../components/Servicios/Servicios';

const Home = () => (
  <div id="home">
    <BackgroundImage />
    <Servicios />
    <Lineas />
    <Footer />
  </div>
);

export default Home;
