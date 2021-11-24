import React from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { createStructuredSelector } from "reselect";
import { selectAcountModalHidden } from "../../../redux/user/user.selectors";

const DynamicModal = ({
  title,
  accountModalHidden,
  size,
  render,
  ...props
}) => {
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

const mapStateToProps = createStructuredSelector({
  accountModalHidden: selectAcountModalHidden,
});

export default connect(mapStateToProps)(DynamicModal);
