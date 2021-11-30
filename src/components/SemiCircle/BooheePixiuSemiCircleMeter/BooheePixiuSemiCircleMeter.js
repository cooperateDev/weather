import React from 'react';
import cn from 'classnames';

import SemiCircleBar from '../SemiCircleBar';

import './BooheePixiuSemiCircleMeter.css';

export default ({ value = 50, className = '', ...restProps }) => (
  <div
    className={cn('boohee-pixiu-semi-circle-meter', className)}
    {...restProps}
  >
    <SemiCircleBar value={value / 100} identity="sec" />

    <ul className="dial">
      <li>Sunset 5:30 PM</li>
      <li>Sunrise 5:41 AM</li>
    </ul>
  </div>
);
