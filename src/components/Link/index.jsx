import React from 'react';
import { Link as RLink } from 'react-router-dom'; // Shorthand Link namespace to RR_Link to represent React-Router Link

import './_link.scss';

const Link = (props) => {
  /*
    @TODO: Allow for configurabe size
  */
  const { className, href, text } = props;

  return (
    <RLink className={'link ' + className} to={href}>{text}</RLink>
  );
};

export default Link;