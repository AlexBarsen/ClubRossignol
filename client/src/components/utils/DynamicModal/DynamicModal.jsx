import React from "react";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";

const DynamicModal = ({ render, size, title, ...props }) => {
  const { t } = useTranslation();
  const WrappedComponent = render;

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={size}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="h4">{t(title)}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <WrappedComponent />
      </Modal.Body>
    </Modal>
  );
};

export default DynamicModal;
