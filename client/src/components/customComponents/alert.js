import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import Alert from "react-bootstrap/Alert";

export default props => {
  return ReactDOM.createPortal(
   <Alert variant={props.variant}>{props.message}</Alert>
    ,
    document.querySelector("#poruka")
  );
};
