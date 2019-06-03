import React from "react";
import { connect } from "react-redux";

import {
  isSignIn,
  signIn,
  signOut,
  userId,
  userProfile,
  authAction
} from "../../store/actions/loginActions";

import Spiner from "../customComponents/spiner";
import GoogleButton from '../buttons/GoogleButton';

import {profilUsera} from '../utilities/constants';

class GoogleOAuth extends React.Component {
  componentDidMount() {
    // Iniciranje Google biblioteke
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "957021161458-l697085bd75434r8k8sipqhu8424csom.apps.googleusercontent.com",
          scope: "email"
        })
        // Ceka odgovor od servera
        .then(() => {
          //Daje instancu ka servisu
          this.auth = window.gapi.auth2.getAuthInstance();
          // Proverava da li je user logovan daje true ili false
          const loginStatus = this.auth.isSignedIn.get();

          if (loginStatus) {
            //Setovanje objekta auth u store preko reducera
            this.props.authAction(this.auth);
            this.props.userId(this.auth.currentUser.get().getId());
            this.onAuthChange(this.auth.isSignedIn.get());
          }
          this.props.isSignIn(loginStatus);
          //Osluskuje da li je ulogovan
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  //Ovde setuje state u zavisnosti od odgovora Google servisa
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      console.log(`ulogovan LoginPage : ${isSignedIn}`);
      this.props.userId(this.auth.currentUser.get().getId());
      const profil = this.auth.currentUser.get().getBasicProfile();
      const userProfileData = profilUsera(profil);
      this.props.userProfile(userProfileData);
      this.props.signIn();
    } else {
      console.log(`nije logovan LoginPage : ${isSignedIn}`);
      this.props.signOut();
    }
  };
  //Logovanje preko googla
  onSignInClick = () => {
    //Poslat objekat od roditelja MainContent
    this.auth.signIn();
    this.props.authAction(this.props.auth);
  };

  onSignOutClick = () => {
    //Brise auth objekat
    this.props.authAction(null);
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.login.isSignIn === null) {
      return <Spiner />;
    } else if (this.props.login.isSignIn) {
      return (
        <GoogleButton
          type="signOutButton"
          text="Odjavi se sa Googl servisa"
          klasa="btn btn-primary"
          onClickEvent={this.onSignOutClick}
        />
      );
    } else {
      return (
        <GoogleButton
          type="signInButton"
          text="Prijavi se preko Googla"
          klasa="btn btn-info"
          onClickEvent={this.onSignInClick}
        />
      );
    }
  }

  render() {
    return <div id="my-signin2">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

const actionCreators = {
  isSignIn,
  signIn,
  signOut,
  userId,
  userProfile,
  authAction
};

export default connect(
  mapStateToProps,
  actionCreators
)(GoogleOAuth);
