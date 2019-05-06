import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router';

/* Components */
import SplitComponent from './components/SplitComponent';
const Navbar = SplitComponent(() => import('./components/Navbar'));

/* Views */
const MainView = SplitComponent(() => import('./views/main'));
const Example1View = SplitComponent(() => import('./views/example1'));
const Example2View = SplitComponent(() => import('./views/example2'));

const hist = createBrowserHistory();

const links = [
  {href: '/example1', text: 'Example 1'},
  {href: '/example2', text: 'Example 2'},
];

const App = () => (
  <Router history={hist}>
    <Navbar logoText="React 2019 Starter" links={links} />
    <Switch>
      <Route exact path="/" component={MainView} />
      <Route path="/example1" component={Example1View} />
      <Route path="/example2" component={Example2View} />
    </Switch>
  </Router>
);

export default App;