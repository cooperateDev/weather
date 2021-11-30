import React, { useEffect } from 'react';
import cn from 'classnames';

import getProgressBarInstance from './getProgressBarInstance';

import './SemiCircleBar.css';

export default function SemiCircleBar({
  value = 50,
  identity = 'sugar',

  className = '',
  ...restProps
}) {
  useEffect(() => {
    const progressBar = getProgressBarInstance(identity);
    progressBar.animate(value);
  }, [value, identity]);

  return (
    <div
      id={identity}
      className={cn('semi-circle-bar', className)}
      {...restProps}
    />
  );
}
