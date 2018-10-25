import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  state = {
    isChecked: false
  };
  toggleCheckboxChange = () => {
    this.setState({ isChecked: true });
  };
  render() {
    return (
      <div className="ubs-root">
        <div className="header">
          <div className="logo">
            <img src="https://sera.ubs.net/ubs_semibold_20_31x84_rgb.svg" />
          </div>
          <div className="applicationName">
            <div className="applicationNamePart">Data</div>
            <div className="applicationNamePart">Transfer</div>
            <div className="applicationNamePart">Tool</div>
            <div className="applicationNamePart">(DTT)</div>
            <div></div>
            </div>
          <div className="applicationVersion"></div>
          <div className="userData">Biswajit Behera, 43567912</div>
          </div>
        <nav id="topMenu" className="topNavigationBar navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li role="presentation" className="home active">
              <a action="push" href="/">
                  <div className="skit-Icon icon home" style={{width: "16px", height: "16px"}}>
                    {/*<svg className="icon" viewBox="0 0 16 16" width="16" height="16">
                  <use xlink: href="/imageSprites.d36f707083cc4cdc8ed15ba1471cc226.svg#icon-Home_16x16_carbon-cfde6"></use></svg>*/}
                  <div className="ie-fix"></div></div>
                  Home
                  </a>
                  </li>
            <li role="presentation" className="">
                  <a action="push" href="/Viewer/Search">Viewer</a></li>
            <li role="presentation" className=""><a action="push" href="/MERExceptions/">MER Exceptions</a></li>
            <li role="presentation" className=""><a role="button" href="#">Reports</a></li>
            <li role="presentation" className=""><a role="button" href="#">Help</a></li></ul></div></nav>  
     
      <div className="App">
        <div className="bgpatch">
          <div className="left_menu"></div>
          <div className="right_menu">
            {/*<nav className="topNavigationBar navbar navbar-default">
              <div className="container-fluid">
                <ul className="nav navbar-nav">
                  <li
                    className={
                      this.state.isChecked ? "home active" : "home"
                    }
                  >
                    <a>
                      Home
                    </a>
                  </li>
                  <li className="navClass">
                    <a>Legal Guidance</a>
                  </li>
                  <li className="navClass">
                    <a>Legal Input</a>
                  </li>
                  <li className="navClass">
                    <a>Integration</a>
                  </li>
                  <li className="navClass">
                    <a>Administration</a>
                  </li>
                  <li className="navClass">
                    <a>Report</a>
                  </li>
                  <li className="navClass">
                    <a>Help</a>
                  </li>
                  <li className="navClass">
                    <a>Notification</a>
                  </li>
                </ul>
              </div>
            </nav>*/}
            {!this.state.isChecked ? (
              <div className="popupCss">
                <h3>Terms Of Use</h3>
                <p>
                  Use of this application is subject to compliance with all
                  relevant UBS policies. It is not permissible to enter Client
                  Identifying Data (CID) or other Personal Data into any free
                  text field in DTT.
                </p>
                <p>
                  <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.toggleCheckboxChange}
                  />
                  I have read and agree to the above terms and conditions. Do
                  not show this disclaimer for the next 7 days.
                </p>
              </div>
            ) : (
              <div>
                <h3>Announcements</h3>
                <div className="contentCss">
                  17-Feb-2018: UK became an adequate jurisdiction.
                </div>
                <div className="contentCss">
                  12-Feb-2018: Entity ID 3876 became active.
                </div>
                <div className="contentCss">
                  09-Feb-2018: Entity ID 6759 consent information changed.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
