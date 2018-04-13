import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import logo from "../dist/logo.png";
import GoogleDocsViewer from "react-google-docs-viewer";
import Informe from "../dist/informe.pdf";
const DIV = () => <div>Hola Mundo!</div>;

const Img = styled.img`
	width: 50vw;
`;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<GoogleDocsViewer width="600px" height="780px" fileUrl={Informe} />
					<Img src={logo} />
					<Route exact path="/" component={DIV} />
					<Redirect from="/*" to="/" />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
