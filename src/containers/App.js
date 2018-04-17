import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import logo from "../dist/logo.png";
import GoogleDocsViewer from "react-google-docs-viewer";
import YouTube from "react-youtube";

class DIV extends Component {
	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.playVideo();
	}
	render() {
		const opts = {
			height: "390",
			width: "640",
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};

		return (
			<div>
				<Img src={logo} />
				<GoogleDocsViewer
					width="600px"
					height="780px"
					fileUrl="https://github.com/PabloSzx/proyecto-solar/raw/master/src/dist/informe.pdf"
				/>
				<YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
			</div>
		);
	}
}

const Img = styled.img`
	position: absolute;
	right: 0;
	width: 20%;
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
