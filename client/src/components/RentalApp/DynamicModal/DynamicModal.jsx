import React from "react";
import Modal from "react-bootstrap/Modal";

const DynamicModal = ({ title, size, render, ...props }) => {
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
      <Modal.Body>{render()}</Modal.Body>
    </Modal>
  );
};

export default DynamicModal;
