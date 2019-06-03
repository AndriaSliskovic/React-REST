import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo hidden-sm-down">
          <h1>
            <div>
              <Link to="/">Home page</Link>
            </div>
          </h1>
        </div>
        <div className="col-5">
          <NavBar />
        </div>
        <div id="poruka" />
      </div>
    );
  }
}

const mapStateToProps = state => {};

const actionCreators = {};

export default connect(
  null,
  actionCreators
)(Header);
