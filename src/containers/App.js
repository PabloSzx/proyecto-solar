import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import logo from "../dist/logo.png";
import GoogleDocsViewer from "react-google-docs-viewer";

const DIV = () => <div>Hola Mundo!</div>;

const Img = styled.img`
	width: 50vw;
`;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<GoogleDocsViewer
						width="600px"
						height="780px"
						fileUrl="https://drive.google.com/file/d/13uWQLHRCZB41l1CNFZGHjkuXoM4lWhBP/view"
					/>
					<Img src={logo} />
					<Route exact path="/" component={DIV} />
					<Redirect from="/*" to="/" />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
