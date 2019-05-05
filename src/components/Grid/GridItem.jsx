import React from 'react';

import './_grid.scss';

const GridItem = (props) => {
  const { children = [], width = 'full' } = props;

  return(
    <div className={`${width}-item`}>
      {children}
    </div>
  );
};

export default GridItem;