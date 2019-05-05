import React from 'react';

import './_grid.scss';

const GridItem = (props) => {
  const { centered = false, children = [], width = 'full' } = props;

  return(
    <div className={`${width}-item ${centered ? 'centered' : ''}`}>
      {children}
    </div>
  );
};

export default GridItem;