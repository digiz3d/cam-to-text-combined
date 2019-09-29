import React from 'react';

import CameraImage from '../assets/camera.svg';

function PhotoButton({ imageCapture, onTookPhoto }) {
  const takePhoto = () => {
    if (imageCapture) {
      imageCapture.takePhoto()
        .then((blob) => {
          // console.log('Took photo:', blob);
          onTookPhoto(blob);
        }).catch((error) => {
          // console.log('takePhoto() error: ', error);
        });
    }
  };

  return (
    <button className="Button PhotoButton" type="button" onClick={takePhoto}><img src={CameraImage} alt="Shutter" /></button>
  );
}

export default PhotoButton;
