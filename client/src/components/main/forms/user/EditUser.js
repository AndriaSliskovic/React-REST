import React from "react";
import { connect } from "react-redux";
import _ from 'lodash';

import UserForm from "./UserForm";

// Bootstrap-ove komponente
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MessageAlert from "../../../customComponents/alert";
import Alert from "react-bootstrap/Alert";
import Spiner from "../../../customComponents/spiner";

// Validacija
// 1. nacin inline validacije ugradjena fja u Reduxu
import * as validacija from "../ValidacijaPolja";
// 2. nacin sa cusomizovanim spoljnim fajlom
import { validiranjePodataka } from "../validiranjePodataka";
// 3. nacin spoljna biblioteka redux-form-validators
import { required, email } from "redux-form-validators";

import {
  settingsAction,
  editUserAction
} from "../../../../store/actions/CRUD/usersActions";

class EditUser extends React.Component {
  componentDidMount() {
    this.props.settingsAction("EDIT");
    console.log(this.props);

    // this.props.fetchUserAction(this.props.user.id)
  }

  onFormSubmit = formValues => {
    const userID=this.props.match.params.id
    console.log(formValues);
        console.log(this.props.match.params.id);
    this.props.editUserAction(this.props.match.params.id,formValues);
  };

  render() {
    document.title = this.props.settings.title;

    if (!this.props.serverResponse) {
      return (
        <MessageAlert
          variant="danger"
          message="Ofline status! Da bi ste uneli novog usera morate biti povezani sa serverom !"
        />
      );
    }
    if (!this.props.user) {
      return <Spiner />;
    }
    return (
      <section id="unosPostova">
        <div className="card col-lg-6">
          <div className="card-header">
            <div className="col-12">
              <h4>Edit usera</h4>
            </div>
          </div>
          <div className="card-body">
            <UserForm 
            // initialValues={{name:"IME", email:"MEKI TAMO"}}
            initialValues={_.pick(this.props.user, 'name', 'email')}
            onFormSubmit={this.onFormSubmit}
            formType="EDIT"
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.id],
    settings: state.settings,
    serverResponse: state.serverResponse
  };
};

const actionCreators = {
  settingsAction,
  editUserAction
};

export default connect(
  mapStateToProps,
  actionCreators
)(EditUser);
