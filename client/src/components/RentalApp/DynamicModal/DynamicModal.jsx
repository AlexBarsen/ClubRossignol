import React from "react";
import Modal from "react-bootstrap/Modal";
const DynamicModal = ({ render, size, title, ...props }) => {
  const WrappedComponent = render;

  console.log("rendering");

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="h4">{title}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <WrappedComponent />
      </Modal.Body>
    </Modal>
  );
};

export default DynamicModal;
