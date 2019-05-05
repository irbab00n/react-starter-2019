import React from 'react';

import './_grid.scss';

const Grid = ({children: listItems = []}) => (
  <div className="grid-wrapper">
    {listItems}
  </div>
);

export default Grid;