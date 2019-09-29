import React, { useRef, useState } from 'react';
import { facingModes } from './CameraChooserRtc';

function VideoRtc({ chosenSide, setImageCapture }) {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const [pastChosenSide, setPastChosenSide] = useState(chosenSide);
  if (pastChosenSide !== chosenSide) {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }

    if (facingModes.includes(chosenSide)) {
      // navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: chosenSide }, height: { ideal: 3000 } } })
      navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: chosenSide } } })
        .then((s) => {
          setStream(s);
          videoRef.current.srcObject = s;
          videoRef.current.onloadedmetadata = function () {
            videoRef.current.play();
          };
          setImageCapture(new ImageCapture(s.getVideoTracks()[0]));

          // console.log('success : ');
          // console.log(s);
        })
        .catch((err) => {
          // console.log('error : ');
          // console.log(err);
        });
    }
    setPastChosenSide(chosenSide);
  }

  return (
    <div className="VideoRtcContainer">
      <video
        className="VideoRtc"
        autoPlay
        muted
        playsinline
        ref={videoRef}
      />
    </div>
  );
}

export default VideoRtc;
