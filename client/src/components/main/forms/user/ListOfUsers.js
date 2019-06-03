import React from "react";
import { connect } from "react-redux";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Spiner from "../../../customComponents/spiner";
import Alert from "../../../customComponents/alert";

import serverJson from "../../../../apis/serverJson";
import localhost from "../../../../apis/lacalhost";


import {
  settingsAction,
  fetchUsersAction,
  selectedUser
} from "../../../../store/actions/CRUD/usersActions";

class ListOfUsers extends React.Component {
  componentDidMount() {
    this.props.settingsAction("LIST");
    this.props.fetchUsersAction(localhost);
  }

  componentDidUpdate(prevProps){

    // console.log(prevProps);
    if (!prevProps.users&&prevProps.users!==this.prop.users) {
      this.props.fetchUsersAction(localhost);
    }
  }

  renderUsersButtons(googleID, message,userId) {
    //Za logovanje preko googla
    if (this.props.userId == googleID) {
      return (
        <td>
          <Link to={`/user/edit/${userId}`} className="btn btn-primary">Edit</Link>
          <Link to={`/user/delete/${userId}`} className="btn btn-danger">Delete</Link>
        </td>
      );
    }
    return <td>{message}</td>;
  }

  renderCreate() {
    if (this.props.isSignIn) {
      return (
        <div className="text-center">
          <Link to="/user/create" className="btn btn-primary">
            <Button variant="primary">Kreiraj novog usera</Button>
          </Link>
        </div>
      );
    }
    return null;
  }

  renderList() {
    const notAdmin = "Nemate ovlascenja da menjate sadrzaj";
    if (this.props.isSignIn) {
      return this.props.users.map(user => {
        return (
          <tr key={user.id}>
            {/* <td>nema </td> */}
            {!user.profile?<td>Nema slike</td>:<td><img src={user.profile.avatar}/></td>}

            <td>{user.name}</td>
            <td>{user.email}</td>
            {this.renderUsersButtons(user.googleID, notAdmin,user.id)}
          </tr>
        );
      });
    } else {
      const notSignIn = "Niste pravilno ulogovani";
      return this.props.users.map(user => {
        return (
          <tr key={user.id}>
            {!user.profile?<td>Nema slike</td>:<td><img src={user.profile.avatar}/></td>}
            <td>{user.name}</td>
            <td>{user.email}</td>
            {this.renderUsersButtons(user.googleID, notSignIn)}
          </tr>
        );
      });
    }
  }

  render() {
    document.title = this.props.settings.title;
    if (!this.props.serverResponse) {
      return <Alert variant="danger" message="Nema konekcije sa serverom!" />;
    } else if (!this.props.users.length) {
      return <Spiner />;
    }
    return (
      <section id="sviProjekti">
        <div className="card col-lg-12">
          <div className="card-header row justify-content-between">
            Lista usera
          </div>
          <div className="card-body">
            <table className="tabela-admin table table-hover">
              <thead>
                <tr>
                <th scope="col">Avatar</th>
                  <th scope="col">Username</th>
                  <th scope="col">email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{this.renderList()}</tbody>
            </table>
            <div className="card-header">{this.renderCreate()}</div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings,
    //Pretvara usere u objekte
    users: Object.values(state.users),
    isSignIn: state.login.isSignIn,
    userId: state.login.userId,
    serverResponse: state.serverResponse
  };
};

const actionCreators = {
  settingsAction,
  fetchUsersAction,
  selectedUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(ListOfUsers);
