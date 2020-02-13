import React from 'react';
import { FaTimes } from "react-icons/fa";

const Modal = (props) => (
  <div className={props.modalDisplay ? "modal" : "modal hidden"}>
    <div className="modal__background" onClick={props.showHideModal}>
      <div className="modal__background--close" onClick={props.showHideModal}><FaTimes className="modal__background--close-icon" /></div>
    </div>
    <div className="modal__body">
      <h3 className="modal__body--title">Rules</h3>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor minima ratione aperiam. Corrupti obcaecati ut neque soluta nulla deleniti molestiae.
    </div>
  </div>
);

export default Modal;
