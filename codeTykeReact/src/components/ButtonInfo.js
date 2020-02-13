import React from 'react';
import { TiInfoLarge } from 'react-icons/ti';

const ButtonInfo = (props) => (
  <button className="button-info" onClick={props.showHideModal}>
    <TiInfoLarge className="button-info__icon" />
  </button>
);

export default ButtonInfo;
