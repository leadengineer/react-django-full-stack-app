//KYIV MEDIA 18.12.2019
import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Header from "./layout/Header";
import Dashboard from "../components/leads/Dashboard";
import Alerts from "./layout/Alerts";
import { Provider } from "react-redux";
import store from "../store";

//Alert Options
const options = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Dashboard />
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
