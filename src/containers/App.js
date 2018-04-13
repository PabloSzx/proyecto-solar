import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import logo from "../dist/logo.png";
import GoogleDocsViewer from "react-google-docs-viewer";
import Informe from "../dist/informe.pdf";
const DIV = () => (
	<div>
		<Img src={logo} />
		<GoogleDocsViewer
			width="600px"
			height="780px"
			fileUrl="https://github.com/PabloSzx/proyecto-solar/raw/master/src/dist/informe.pdf"
		/>
	</div>
);

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
