import React from 'react';

import DotsImage from '../assets/dots.svg';

export const facingModes = ['environment', 'user'];

function CameraChooserRtc({ onChooseSide, chosenSide }) {
  const toggle = () => {
    if (chosenSide === facingModes[0]) {
      onChooseSide(facingModes[1]);
    } else {
      onChooseSide(facingModes[0]);
    }
  };

  return (
    <button className="Button SettingsButton" type="button" onClick={toggle}><img src={DotsImage} alt="Settings" /></button>
  );
}

export default CameraChooserRtc;
