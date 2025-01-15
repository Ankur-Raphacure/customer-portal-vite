import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles.css";

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modalBodyDefault">
        <p className="modalBodyText">{props.titleText}</p>
      </Modal.Body>
      <Modal.Footer>
        {props.cancelText != "" && (
          <Button onClick={props.onCancel} className="modalCandelBtn">
            {props.cancelText}
          </Button>
        )}
        <Button onClick={props.onDelete} className="modalDeleteBtn">
          {props.deleteText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
