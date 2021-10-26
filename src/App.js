import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
