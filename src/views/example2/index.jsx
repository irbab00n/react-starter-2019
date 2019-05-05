import React from 'react';

import SplitComponent from '../../components/SplitComponent'

// import {Grid, GridItem} from '../../components/Grid';
const GridWrapper = SplitComponent(() => import('../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../components/Grid/GridItem'));

import './_example-2-view.scss';

const Example2View = () => (
  <main id="example-2-view">
    <h1 className="page-title">Check out the variance in composition!</h1>
    <section className="bg-grey-400">
      <h1>Grid Comp #1</h1>
      <GridWrapper>
        <GridItem width="quarter" centered>Quarter</GridItem>
        <GridItem width="half" centered>Half</GridItem>
        <GridItem width="quarter" centered>Quarter</GridItem>
        <GridItem width="full" centered>Full</GridItem>
      </GridWrapper>
    </section>
    <section className="bg-grey-200">
      <h1>Grid Comp #2</h1>
      <GridWrapper>
        <GridItem width="full" centered>Full</GridItem>
        <GridItem width="half" centered>Half</GridItem>
        <GridItem width="quarter" centered>Quarter</GridItem>
        <GridItem width="quarter" centered>Quarter</GridItem>
      </GridWrapper>
    </section>
    <section className="bg-grey-100">
      <h1>Grid Comp #3</h1>
      <GridWrapper>
        <GridItem width="quarter" centered>Quarter</GridItem>
        <GridItem width="quarter" centered>Quarter</GridItem>
        <GridItem width="full" centered>Full</GridItem>
        <GridItem width="half" centered>Half</GridItem>
        <GridItem width="quarter" centered>Quarter</GridItem>
      </GridWrapper>
    </section>
  </main>
);

export default Example2View;