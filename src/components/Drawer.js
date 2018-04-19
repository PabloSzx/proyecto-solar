import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import List from "material-ui/List";
import { MenuItem } from "material-ui/Menu";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import { mailFolderListItems, otherMailFolderListItems } from "./tileData";

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	appFrame: {
		height: 430,
		zIndex: -1,
		overflow: "hidden",
		position: "relative",
		display: "flex",
		width: "100%"
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`
	},
	"appBar-left": {
		marginLeft: drawerWidth
	},
	"appBar-right": {
		marginRight: drawerWidth
	},
	drawerPaper: {
		position: "relative",
		width: drawerWidth
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3
	}
});

class PermanentDrawer extends React.Component {
	state = {
		anchor: "left"
	};

	handleChange = event => {
		this.setState({
			anchor: event.target.value
		});
	};

	render() {
		const { classes } = this.props;
		const { anchor } = this.state;

		return (
			<Drawer
				variant="permanent"
				classes={{
					paper: classes.drawerPaper
				}}
				anchor={anchor}
			>
				<div className={classes.toolbar} />
				<Divider />
				<List>{mailFolderListItems}</List>
				<Divider />
				<List>{otherMailFolderListItems}</List>
			</Drawer>
		);
		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar
						position="absolute"
						className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
					/>
					<Drawer
						variant="permanent"
						classes={{
							paper: classes.drawerPaper
						}}
						anchor={anchor}
					>
						<div className={classes.toolbar} />
						<Divider />
						<List>{mailFolderListItems}</List>
						<Divider />
						<List>{otherMailFolderListItems}</List>
					</Drawer>
				</div>
			</div>
		);
	}
}

PermanentDrawer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanentDrawer);
