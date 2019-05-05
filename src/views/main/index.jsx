import React from 'react';

import SplitComponent from '../../components/SplitComponent'

// import {Grid, GridItem} from '../../components/Grid';
const GridWrapper = SplitComponent(() => import('../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../components/Grid/GridItem'));

import './_main-view.scss';

const MainView = () => (
  <main id="main-view">
    <h1 className="page-title">A Grid with various sized components!</h1>
    <section className="bg-grey-400">
      <h1>Quarter Grid</h1>
      <GridWrapper>
        <GridItem width="quarter" centered>Quarter Grid Items</GridItem>
        <GridItem width="quarter" centered>Item 1</GridItem>
        <GridItem width="quarter" centered>Item 2</GridItem>
        <GridItem width="quarter" centered>Item 3</GridItem>
        <GridItem width="quarter" centered>Item 4</GridItem>
        <GridItem width="quarter" centered>Item 5</GridItem>
        <GridItem width="quarter" centered>Item 6</GridItem>
        <GridItem width="quarter" centered>They automatically wrap!</GridItem>
      </GridWrapper>
    </section>
    <section className="bg-grey-200">
      <h1>Half Grid</h1>
      <GridWrapper>
        <GridItem width="half" centered>Half Grid Items</GridItem>
        <GridItem width="half" centered>Item 1</GridItem>
        <GridItem width="half" centered>They automatically wrap!</GridItem>
      </GridWrapper>
    </section>
    <section className="bg-grey-100">
      <h1>Full Grid</h1>
      <GridWrapper>
        <GridItem centered>Full Grid Items</GridItem>
        <GridItem centered>They automatically wrap!</GridItem>
      </GridWrapper>
    </section>
  </main>
);

export default MainView;