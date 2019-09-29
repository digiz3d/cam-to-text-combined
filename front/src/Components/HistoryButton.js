import React from 'react';

import HistoryImage from '../assets/history.svg';

function HistoryButton() {
  return (
    <button className="Button HistoryButton" type="button">
      <img src={HistoryImage} alt="History" />
    </button>
  );
}

export default HistoryButton;
