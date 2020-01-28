import React from 'react';
import './divider.scss';

/**
 * @param type: 'horizontal' | 'vertical'
 * @constructor
 */
function Divider ({ type = 'horizontal' }) {
  return (
    <div className={
      type === 'horizontal'
        ? 'divider-horizontal'
        : 'divider-vertical'
    } />
  )
}

export default Divider;
