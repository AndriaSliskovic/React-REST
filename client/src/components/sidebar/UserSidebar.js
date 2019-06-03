import React from "react";
import { Dropdown } from "react-bootstrap";

import { connect } from "react-redux";

import Modal from "../modal/Modal";
import GoogleOAuth from '../googleOAuth/GoogleOAuth'

import {openModal,closeModal} from '../../store/actions/modalActins';
import {signOut,authAction} from '../../store/actions/loginActions';
 

class UserSidebar extends React.Component {
  closeModal=()=>{
    this.props.closeModal();
  }

  signOut=()=>{
    // Ako postoji auth objekat
    if (this.props.login.auth) {
      this.props.login.auth.signOut()
    }
    //Brise auth objekat
    this.props.authAction(null);
    this.props.signOut();
    this.props.closeModal();
  }

  openModal=event=>{
    const data={
      profile:{
        title:`ime i prezime : ${this.props.login.userProfile.imePrezime}`,
        body:`email adresa : ${this.props.login.userProfile.email}`,
        buttonSubmit:null,
        buttonClose:"Zatvori"
      },
      logOut:{
        title:"LogOut",
        body:"Izlogujte se !",
        buttonSubmit:"Potvrdi",
        buttonClose:"Zatvori"
      }
    }
    switch (event) {
      case "Profile":    
      this.props.openModal(data.profile);
        break;
      case "LogOut":
      this.props.openModal(data.logOut);
      break;
      default:
        break;
    }
  }

  profilUsera=()=> {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <div>Profil usera : </div>
            <div className="user__name">
              {this.props.login.userProfile.imePrezime}
            </div>
            <div className="user__email">
              {this.props.login.userProfile.email}
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Profile" onSelect={this.openModal}>
              Profil
            </Dropdown.Item>
            <Dropdown.Item eventKey="LogOut" onSelect={this.openModal}>
              LogOut
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }

  renderProfile=()=> {
    // Ako je ulogovan na Google
    if (this.props.login.isSignIn) {
      return <div>{this.profilUsera()}</div>;
    } else {
      return (
        <div>
       <GoogleOAuth/>
        </div>
      );
    }
  }

  render() {
    if (this.props.modal.isOpen) {
      //Saljem kao props jer je modal funkciska komponenta
      return <Modal data={this.props.modal}  submitAction={this.signOut}/>;
    }
    return (
      <div className="user__info" data-toggle="dropdown">
        {this.renderProfile()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    podesavanja: state.settings,
    login: state.login,
    modal:state.modal
  };
};
const actionCreators = {
  openModal,
  closeModal,
  signOut,
  authAction
};

export default connect(
  mapStateToProps,
  actionCreators
)(UserSidebar);
