import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Directions from './components/pages/Directions';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/directions' component={Directions} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
