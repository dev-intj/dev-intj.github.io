import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';

//sem and seo management
import {Helmet} from 'react-helmet'

//import css styles (scss in this case)
import './styles/custom/_all.scss';
//import main pages of the portfolio
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

//import project pages
import RuneRagnarok from './pages/projects/RuneRagnarok';

import ScrollToTop from './utils/scrollToTop';


function App() {
  return (
    <div className="App">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Christos Dematas</title>
        <meta name="description" content="A UI/UX Designer based in Greece aims to be Full Stack Software Engineer"/>
        <link rel="canonical" href="https://dev-intj.github.io/"/>
      </Helmet>

      <Router>
        <ScrollToTop>
        <Switch>
          <Route exact path='/' component={() => <Home/>} />
          <Route path='/about' component={() => <About/>} />
          <Route path='/work' component={() => <Work/>}  />
          <Route path='/contact' component={() => <Contact/>} />

          {/* Projects switch */}
          <Route path='/projects/runeragnarok' component={() => <RuneRagnarok/>} />
          
        </Switch>
        </ScrollToTop>
      </Router>
     
    </div>
  );
}

export default hot(App);

//I have to fix figure in the scss and change it to div class figure