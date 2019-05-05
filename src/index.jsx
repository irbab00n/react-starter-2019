import React from 'react';
import ReactDOM from 'react-dom';

import SplitComponent from './components/SplitComponent';

import '../sass/main.scss';

const AsyncApp = SplitComponent(() => import('./App'));

ReactDOM.render(
  <AsyncApp />,
  document.getElementById('root')
);
