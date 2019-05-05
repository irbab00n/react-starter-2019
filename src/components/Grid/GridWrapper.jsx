import React from 'react';

import './_grid.scss';

const GridWrapper = ({children: listItems = []}) => (
  <div className="grid-wrapper">
    {listItems}
  </div>
);

export default GridWrapper;