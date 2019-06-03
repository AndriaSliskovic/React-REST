import React from "react";
import { connect } from "react-redux";

import { settingsAction } from "../../../store/actions/homeActions";

class HomePage extends React.Component {


  componentDidMount() {
    this.props.settingsAction();
  }
  render() {
    document.title = this.props.settings.title;
    return (
      <div>
        <div>{this.props.settings.naslov}</div>
        <div>{this.props.settings.podnaslov}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

const actionCreators = {
  settingsAction
};

export default connect(
  mapStateToProps,
  actionCreators
)(HomePage);
