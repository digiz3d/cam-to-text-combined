import React, { useState /* , useRef */ } from 'react';
import { getData, getAllTags } from 'exif-js';

import './App.css';
import CameraChooserRtc from './Components/CameraChooserRtc';
import VideoRtc from './Components/VideoRtc';
import PhotoButton from './Components/PhotoButton';
import HistoryButton from './Components/HistoryButton';


function App() {
  const [chosenSide, setChosenSide] = useState(null);
  const [imageCapture, setImageCapture] = useState(null);
  // const imgRef = useRef(null);

  const onTookPhoto = (blob) => {
    getData(blob, function () {
      console.log(getAllTags(this));
    });
    // imgRef.current.src = URL.createObjectURL(blob);
  };

  return (
    <div className="App">
      <VideoRtc chosenSide={chosenSide} setImageCapture={setImageCapture} />
      <div className="Menu">
        <CameraChooserRtc chosenSide={chosenSide} onChooseSide={(id) => setChosenSide(id)} />
        <PhotoButton imageCapture={imageCapture} onTookPhoto={onTookPhoto} />
        <HistoryButton />
      </div>
      {/*
      <img
        ref={imgRef}
        alt="result"
        style={{
          borderColor: 'black', borderWidth: 1, borderStyle: 'solid', width: '100%', backgroundColor: 'red',
        }}
      />
      */}
    </div>
  );
}

export default App;
