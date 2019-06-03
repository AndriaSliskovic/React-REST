import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router } from "react-router-dom";
import history from './history';
import thunk from "redux-thunk";


// Ucitavanje glavnih komponenti
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/Sidebar";
import MainContent from "./components/main/MainContent";

import { Helmet } from "react-helmet";

import reducers from "./store/reducers";

//Podesavanje redux devtoolsa
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Pravi store u ReduxPage
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Router history={history}>
          <div className="main">
            <Provider store={store}>
            
            {/* Komponenta za podesavanje head-a */}
              <Helmet>

              </Helmet>
              <header id="header">
                <Header />
              </header>
              <aside id="sidebar">
                <SideBar />
              </aside>
              <section className="content">
                <MainContent />
              </section>
            </Provider>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
