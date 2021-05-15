import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HashRouter} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"


//import css styles (scss in this case)
import './styles/custom/_all.scss';
//import main pages of the portfolio
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

//import project pages
import RuneRagnarok from './pages/projects/RuneRagnarok';
//testing
import Abstract from './pages/Abstract';
export const history = createHistory()

history.listen((location, action) => {
    window.scrollTo(0, 0)
})


function App() {
  return (
    <div className="App">

      <HashRouter>
        <Switch>
          <Route exact path='/' component={() => <Home/>} />
          <Route path='/about' component={() => <About/>} />
          <Route path='/work' component={() => <Work/>}  />
          <Route path='/contact' component={() => <Contact/>} />
          <Route path='/abstract' component={() => <Abstract/>} />
          {/* Projects switch */}
          <Route path='/projects/runeragnarok' component={() => <RuneRagnarok/>} />
          
        </Switch>
      </HashRouter>

    </div>
  );
}

export default hot(App);

//I have to fix figure in the scss and change it to div class figure