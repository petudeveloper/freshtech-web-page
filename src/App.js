import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import QuotationForm from './pages/QuotationForm';
import Lineas from './pages/Lineas';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/cotizar" component={QuotationForm} />
          <Route path="/linea/:linea" component={Lineas} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
