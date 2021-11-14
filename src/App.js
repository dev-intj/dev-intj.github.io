import { hot } from "react-hot-loader/root";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//sem and seo management
import { Helmet } from "react-helmet";

//import css styles (scss in this case)
import "./assets/scss/_all.scss";

//import main pages of the portfolio
import Home from "./pages/Home";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Christos Dematas</title>
        <meta
          name="description"
          content="A UI/UX Designer based in Greece aims to be Full Stack Software Engineer"
        />
        <link rel="canonical" href="https://dev-intj.github.io/" />
      </Helmet>

      <Router>
        {/*<ScrollToTop>*/}
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        {/*</ScrollToTop>*/}
      </Router>
    </div>
  );
}

export default hot(App);