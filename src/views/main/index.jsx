import React from 'react';

import AsyncComponent from '../../components/AsyncComponent'

import './_main-view.scss';

const MainView = () => (
  <main id="main-view">
    <section className="bg-grey-400">
      <h1>Quarter Grid</h1>
      <div className="grid-wrapper">
        <div className="quarter-item centered">Quarter Grid Items</div>
        <div className="quarter-item centered">Item 1</div>
        <div className="quarter-item centered">Item 2</div>
        <div className="quarter-item centered">Item 3</div>
        <div className="quarter-item centered">Item 4</div>
        <div className="quarter-item centered">Item 5</div>
        <div className="quarter-item centered">Item 6</div>
        <div className="quarter-item centered">They automatically wrap!</div>
      </div>
    </section>
    <section className="bg-grey-200">
      <h1>Half Grid</h1>
      <div className="grid-wrapper">
        <div className="half-item centered">Half Grid Items</div>
        <div className="half-item centered">Item 1</div>
        <div className="half-item centered">They automatically wrap!</div>
      </div>
    </section>
    <section className="bg-grey-100">
      <h1>Full Grid</h1>
      <div className="grid-wrapper">
        <div className="full-item centered">Full Grid Items</div>
        <div className="full-item centered">They automatically wrap!</div>
      </div>
    </section>
  </main>
);

export default MainView;