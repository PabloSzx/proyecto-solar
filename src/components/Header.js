import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import SwipeableDrawer from "material-ui/SwipeableDrawer";
import Button from "material-ui/Button";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import { mailFolderListItems, otherMailFolderListItems } from "./tileData";

const styles = {
	list: {
		width: 250
	},
	fullList: {
		width: "auto",
		position: "relative",
		float: "left",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	},
	center: {
		position: "relative",
		float: "left",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	}
};

class SwipeableTemporaryDrawer extends React.Component {
	state = {
		top: true
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { classes } = this.props;

		const fullList = (
			<div className={classes.fullList}>
				<List>{mailFolderListItems}</List>
				<Divider />
				<List>{otherMailFolderListItems}</List>
			</div>
		);

		return (
			<div style={styles.center}>
				<Button onClick={this.toggleDrawer("top", true)}>Open Top</Button>
				<SwipeableDrawer
					anchor="top"
					open={this.state.top}
					onClose={this.toggleDrawer("top", false)}
					onOpen={this.toggleDrawer("top", true)}
				>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer("top", false)}
						onKeyDown={this.toggleDrawer("top", false)}
					>
						{fullList}
					</div>
				</SwipeableDrawer>
			</div>
		);
	}
}

SwipeableTemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
