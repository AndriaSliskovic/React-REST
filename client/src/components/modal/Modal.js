import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";

import {closeModal} from '../../store/actions/modalActins'
import { Modal, Button } from "react-bootstrap";


const modal = props => {

  console.log(props);
  function handleClose(e) {
    e.preventDefault();
    props.closeModal();
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Potvrdjen submit');
    props.submitAction();
  }

  //Pravi portal ka index.html
  return ReactDOM.createPortal(
    <div >
      <Modal.Dialog>
        <div onClick={e => e.stopPropagation()}>
          <Modal.Header closeButton>
            <Modal.Title>{props.data.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{props.data.body}</p>
          </Modal.Body>

          <Modal.Footer>
          {
            props.data.buttonSubmit
            ?(
              <Button variant="primary" onClick={handleSubmit}>
              {props.data.buttonSubmit}
                </Button>
            ):null
          }

            <Button variant="secondary" onClick={handleClose}>
              {props.data.buttonClose}
            </Button>
          </Modal.Footer>
        </div>
      </Modal.Dialog>
    </div>,

    document.querySelector("#modal")
  );
};

const actionCreators = {
  closeModal
};

export default connect(
  null,
  actionCreators
)(modal);
