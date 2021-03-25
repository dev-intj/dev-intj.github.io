import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



//import css styles (scss in this case)
import './styles/custom-bulma.scss';
//import main pages of the portfolio
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

//import project pages
import RuneRagnarok from './pages/projects/RuneRagnarok';



function App() {
  return (
    <div className="App">

      <Router forceRefresh={true}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
          {/* Projects switch */}
          <Route path='/contact' component={Contact} />
          <Route path='/projects/runeragnarok' component={RuneRagnarok} />
        </Switch>
      </Router>

    </div>
  );
}

export default hot(App);

//I have to fix figure in the scss and change it to div class figure