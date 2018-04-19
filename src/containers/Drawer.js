import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import List from "material-ui/List";
import DescriptionIcon from "@material-ui/icons/Description";
import VideoIcon from "@material-ui/icons/OndemandVideo";

class PermanentDrawer extends Component {
	render() {
		return (
			<Drawer variant="permanent" anchor="left">
				<Divider />
				<List
					style={{
						width: "15vw",
						position: "relative",
						top: "50%",
						transform: "perspective(1px) translateY(-50%)"
					}}
				>
					<ListItem button onClick={() => this.props.setPage("informe")}>
						<ListItemIcon>
							<DescriptionIcon />
						</ListItemIcon>
						<ListItemText primary="Informe" />
					</ListItem>
					<Divider />
					<ListItem button onClick={() => this.props.setPage("video")}>
						<ListItemIcon>
							<VideoIcon />
						</ListItemIcon>
						<ListItemText primary="Video" />
					</ListItem>
				</List>
			</Drawer>
		);
	}
}

export default withStyles(null)(PermanentDrawer);
