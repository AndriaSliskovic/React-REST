import React from "react";
import { connect } from "react-redux";

import localhost from "../../apis/lacalhost";
import { fetchUsersAction } from "../../store/actions/CRUD/usersActions";
import { adminAction, notAdminAction } from "../../store/actions/loginActions";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from "react-bootstrap/Badge";

// Klasa koja ucitava sve usere, proverava da li je user koji
// je logovan preko googla admin i setuje state za admina
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      admin: null,
      variant:"light",
      text:"Niste ulogovani na server ..."
    };
  }

  componentDidMount() {
    this.props.fetchUsersAction(localhost);
  }
  componentDidUpdate(prevProps) {

    if (prevProps.isSignIn && prevProps.serverResponse && !this.state.admin) {
      this.isAdmin();
    }
    // Renderuje odgovarajuce dugme za admina
    if (prevProps.admin != this.state.admin) {
      if (this.state.admin) {
      this.setState({variant:"success", text:"Admin"});
      } else if (!this.props.serverResponse) {
        this.setState({variant:"danger", text:"Niste ulogovani"});
      }else{
        this.setState({variant:"warning", text:"Regular user"});
      }      
    }
  }
  isAdmin() {
    const userId = this.props.userId;
    //Nalazi prvi element koji odgovara uslovu, vraca objekat
    const user = this.props.users.find(user => user.googleID == userId);
    if (user) {
      this.setState({ admin: true });
      this.props.adminAction();
    }
  }

  renderStatus(variant, text) {
    return (
      <Container className="user__info">
        <Row>
          <Col>status : </Col>
          <Col>
            <Badge variant={variant}>{text}</Badge>
          </Col>
          </Row>
      </Container>   
    );
  }

  render() {
    return <div>{this.renderStatus(this.state.variant,this.state.text)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: Object.values(state.users),
    serverResponse: state.serverResponse,
    isSignIn: state.login.isSignIn,
    userId: state.login.userId,
    admin: state.admin
  };
};

const actionCreators = {
  fetchUsersAction,
  adminAction,
  notAdminAction
};

export default connect(
  mapStateToProps,
  actionCreators
)(Admin);
