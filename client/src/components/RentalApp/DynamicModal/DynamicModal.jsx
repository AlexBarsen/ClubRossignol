import React from "react";
import Modal from "react-bootstrap/Modal";

const DynamicModal = ({ ...props }) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={props.modalSize}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="h4">{props.modalTitle}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.renderComponent()}</Modal.Body>
    </Modal>
  );
};

export default DynamicModal;
