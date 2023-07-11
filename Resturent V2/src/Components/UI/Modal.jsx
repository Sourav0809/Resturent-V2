/* eslint-disable react/prop-types */
import "./Modal.css";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
  return <div className="modal-backdrop">{props.children}</div>;
};
const Overlay = (props) => {
  return (
    <div className="modal-overlay">
      <div className="overlay-container">
        <div className="cart-container">
          <i className="bx bx-cart"></i>
          <h3>My Cart</h3>
        </div>
        {props.children}
      </div>
    </div>
  );
};

const PortalOverlays = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, PortalOverlays)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        PortalOverlays
      )}
    </>
  );
};

export default Modal;
