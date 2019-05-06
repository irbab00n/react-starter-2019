import React from 'react';

import './_grid.scss';

const GridItem = (props) => {
  const { anchorRight = false, centered = false, children = [], width = 'full' } = props;

  return(
    <div className={`${width}-item ${centered ? 'centered' : ''} ${anchorRight ? 'anchor-right' : ''}`}>
      {children}
    </div>
  );
};

export default GridItem;