import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ReBookStyled } from "./ReBook.styled";

const ReBook = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>ReBook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReBookStyled>
            <p>This is the ReBook modal content.</p>
          </ReBookStyled>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert("Action executed!")}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReBook;
