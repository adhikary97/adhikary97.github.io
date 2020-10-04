import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import About from './pages/About';
import Links from './pages/Links';
import Projects from './pages/Projects';
import MainNavigation from './components/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Links />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
