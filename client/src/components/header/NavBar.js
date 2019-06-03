import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/users/list">
            Lista Usera
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user/create">
            Kreiraj usera
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user/edit">
            Edit usera
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="#">
            Disabled
          </Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {};

const actionCreators = {};

export default connect(
  null,
  actionCreators
)(NavBar);
