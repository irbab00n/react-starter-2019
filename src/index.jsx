import React from 'react';
import ReactDOM from 'react-dom';

import AsyncComponent from './components/AsyncComponent';

import '../sass/main.scss';

const AsyncApp = AsyncComponent(() => import('./App'));

ReactDOM.render(
  <AsyncApp />,
  document.getElementById('root')
);
