import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import List from "material-ui/List";
import DescriptionIcon from "@material-ui/icons/Description";
import VideoIcon from "@material-ui/icons/OndemandVideo";

const styles = {
  text: {
    "font-size": "0.8rem"
  }
};

class PermanentDrawer extends Component {
  style;
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
          <ListItem button onClick={() => this.props.setPage("informe1")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText>
              <p style={styles.text}>Informe Tarea 1</p>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.props.setPage("video1")}>
            <ListItemIcon>
              <VideoIcon />
            </ListItemIcon>
            <ListItemText>
              <p style={styles.text}>Video Tarea 1</p>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.props.setPage("informe2")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText>
              <p style={styles.text}>Informe Tarea 2</p>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.props.setPage("video2")}>
            <ListItemIcon>
              <VideoIcon />
            </ListItemIcon>
            <ListItemText>
              <p style={styles.text}>Video Tarea 2</p>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(null)(PermanentDrawer);
