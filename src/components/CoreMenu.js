import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import Menu, { MenuItem } from 'material-ui/Menu';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';

// Icons
import ListIcon from 'material-ui-icons/List';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import MenuRender from './MenuRender';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  }
});

class CoreMenu extends Component {

  state = {
    versionSelect: false,
  }

  render() {

    const { version, versions, summary, classes, pathname } = this.props;
    const { versionSelect } = this.state;

    return (
      <List component="div" >
        <ListItem button component="div" aria-owns="version-select" onClick={() => this.handleVersionSelectClick()}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="核心版本" secondary={version} />
          <ListItemIcon>
            { versionSelect ? (<ExpandLessIcon />) : (<ExpandMoreIcon />) }
          </ListItemIcon>
        </ListItem>

        <Collapse in={versionSelect} transitionDuration="auto" unmountOnExit>
          {versions.map((item, key) => (
            <ListItem key={key} button className={classes.nested} component={Link} to={`/core/${item}`} >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </Collapse>

        <Divider />

        {summary.map((item, key) => (
          <MenuRender key={key} tree={item} prefix={`/core/${version}`} pathname={pathname} />
        ))}

      </List>
    );
  }

  handleVersionSelectClick() {
    this.setState({
      ...this.state,
      versionSelect: ! this.state.versionSelect
    });
  }
}

export default withStyles(styles)(CoreMenu);
