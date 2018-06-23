import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import logo from "../dist/logo.png";
import GoogleDocsViewer from "react-google-docs-viewer";
import YouTube from "react-youtube";
import Drawer from "./Drawer";
const styles = {
  center: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  center2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)"
  }
};

let opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

class DIV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "informe2",
      width: 0,
      height: 0
    };
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.playVideo();
  }

  setPage(page) {
    console.log(page);
    this.setState({
      page
    });
  }

  renderPage() {
    switch (this.state.page) {
      case "home": {
        return <div />;
      }
      case "informe1": {
        return (
          <GoogleDocsViewer
            width="100vh"
            height="98vh"
            fileUrl="https://github.com/PabloSzx/proyecto-solar/raw/master/src/dist/informe.pdf"
          />
        );
      }
      case "informe2": {
        return (
          <GoogleDocsViewer
            width="100vh"
            height="98vh"
            fileUrl="https://github.com/PabloSzx/proyecto-solar/raw/master/src/dist/Informe%202.pdf"
          />
        );
      }
      case "informe3": {
        return (
          <GoogleDocsViewer
            width="100vh"
            height="98vh"
            fileUrl="https://github.com/PabloSzx/proyecto-solar/raw/master/src/dist/informe3.pdf"
          />
        );
      }
      case "video1": {
        return (
          <YouTube videoId="sr4lSBuYV_w" opts={opts} onReady={this._onReady} />
        );
      }
      case "video2": {
        return (
          <YouTube videoId="eX4I6PbLJls" opts={opts} onReady={this._onReady} />
        );
      }
      case "video3": {
        return (
          <YouTube videoId="7DDaCgNBLbI" opts={opts} onReady={this._onReady} />
        );
      }

      default: {
        return <div />;
      }
    }
  }

  render() {
    return (
      <div>
        <Drawer setPage={page => this.setPage(page)} />
        <Img src={logo} />
        <div style={styles.center2} />
        <div style={styles.center2}>{this.renderPage()}</div>
      </div>
    );
  }
}

const Img = styled.img`
  position: fixed;
  right: 1%;
  top: 1%;
  width: 20vw;
  z-index: -1;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DIV} />
          <Redirect from="/*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
