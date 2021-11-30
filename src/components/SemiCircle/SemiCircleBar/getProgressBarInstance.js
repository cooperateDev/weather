import ProgressBar from 'progressbar.js';
import isNil from 'lodash/isNil';

let instanaceProgressBar = null;

function getProgressBarInstance(ele) {
  function createIns() {
    const Gradient =
      '<defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#E4F3FF"/><stop offset="100%" stop-color="#A3D2F9"/></linearGradient></defs>';
    instanaceProgressBar = new ProgressBar.SemiCircle(`#${ele}`, {
      strokeWidth: 2,
      easing: 'easeInOut',
      duration: 1400,
      color: 'white',
      trailColor: '#ddd',
      trailWidth: 1,
      svgStyle: null
    });
    instanaceProgressBar.svg.insertAdjacentHTML('afterbegin', Gradient);

    return instanaceProgressBar;
  }

  return isNil(instanaceProgressBar) ? createIns() : instanaceProgressBar;
}

export default getProgressBarInstance;
