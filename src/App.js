import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import QuotationForm from './pages/QuotationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/cotizar" component={QuotationForm} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
