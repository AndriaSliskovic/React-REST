import React from "react";
import { connect } from "react-redux";

import UserForm from './UserForm';

import {
  settingsAction,
  createUserAction,
} from "../../../../store/actions/CRUD/usersActions";

class CreateUser extends React.Component {

  componentDidMount() {
    this.props.settingsAction("CREATE");
  }

  onFormSubmit = (formValues) => {
    //Kod redux forma nema preventDefault()
    this.props.createUserAction(formValues);    
  };

  render() {  
    document.title = this.props.settings.title;
    if (!this.props.serverResponse) {
      return this.renderErrorMessage("Ofline status! Da bi ste uneli novog usera morate biti povezani sa serverom !");
    } 
    return ( 
      <section id="unosPostova">
        <div className="card col-lg-6">
          <div className="card-header">
            <div className="col-12">
              <h4>Kreiranje usera</h4>
            </div>
          </div>
          <div className="card-body">
            <UserForm onFormSubmit={this.onFormSubmit} />
          </div>
        </div>
      </section>
    );
  }
}


const mapStateToProps = state => {
  return {
    settings: state.settings,
    serverResponse: state.serverResponse,
    error:state.error
  };
};

const actionCreators = {
  settingsAction,
  createUserAction,
};

export default connect(
  mapStateToProps,
  actionCreators
)(CreateUser);
