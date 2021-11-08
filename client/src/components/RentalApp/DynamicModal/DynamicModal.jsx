import React from "react";
import Modal from "react-bootstrap/Modal";

const DynamicModal = ({ ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.renderComponent()}</Modal.Body>
    </Modal>
  );
};

export default DynamicModal;
