import React from 'react';
import ReactDOM from 'react-dom';

import AsyncComponent from './components/AsyncComponent';

import '../sass/main.scss';

const AsyncApp = AsyncComponent(() => import('./App'));

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    ReactDOM.render(
      <AsyncApp />,
      document.getElementById('root')
    );
  }
}
