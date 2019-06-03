import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <p>© React - Starter kit </p>
        <ul className="nav footer__nav">
          <Link className="nav-link" to="">
            Homepage
          </Link>

          <Link className="nav-link" to="">
            Company
          </Link>

          <Link className="nav-link" to="">
            Support
          </Link>

          <Link className="nav-link" to="">
            News
          </Link>

          <Link className="nav-link" to="">
            Contacts
          </Link>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {};

const actionCreators = {};

export default connect(
  null,
  actionCreators
)(Footer);
