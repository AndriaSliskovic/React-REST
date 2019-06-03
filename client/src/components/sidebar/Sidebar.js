import React from "react";
import { connect } from "react-redux";

import UserSidebar from "./UserSidebar";
import Admin from "./Admin";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="scrollbar-inner">
          <div>
            <UserSidebar />
          </div>
          <div>
            <Admin />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {};

const actionCreators = {};

export default connect(
  null,
  actionCreators
)(Sidebar);
