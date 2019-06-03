import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// Ucitavanje stranica
import Footer from "../footer/Footer";
import HomePage from "./pages/HomePage";
import CreateUser from "./forms/user/CreateUser";
import ListOfUsers from "./forms/user/ListOfUsers";
import EditUser from "./forms/user/EditUser";

import Alert from "../../components/customComponents/alert";
import MessageAlert from "../../components/customComponents/alert";


class MainContent extends React.Component {
  constructor(props){
    super(props);
    this.state={error:null};
  }

  componentDidUpdate(prevProps){
    if (prevProps.error!==this.props.error) {
      this.setState({error:this.props.error.response.statusText})
    }    
  }

  renderErrorMessage(message) {
    return <MessageAlert variant="danger" message={message} />;
  };

  // Metod za ucitavanje svih ruta koje se koriste
  renderRoute() {
    //Helper za iscitavanje ruta iz spoljnog fajla
    // const route=navBarsMain.menus.map(el=>(<Route path={el.to} exact component={el.page} key={el.name}/>
    //   ));
    return (
      <div>
        <Route path="/" exact component={HomePage} />

        <Route path="/user/create" exact component={CreateUser} />
        <Route path="/users/list" exact component={ListOfUsers} />
        <Route path="/user/edit/:id" exact component={EditUser} />
        {/* Pusta auth objekat kao props */}
        {/* <Route path="/login" exact render={()=><LoginPage auth={this.auth}/>} /> */}
      </div>
    );
  }

  render() {
    return (
      <div>
      {/* Hendler errora */}
      {this.state.error?this.renderErrorMessage(this.props.error.response.statusText):null}
        <div id="modal" />
        <div>
          {/* Rutiranje Glavnog sadrzaja */}
          {this.renderRoute()}
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    serverResponse: state.serverResponse,
    error:state.error
  };
};

const actionCreators = {

};

export default connect(
  mapStateToProps,
  actionCreators
)(MainContent);
