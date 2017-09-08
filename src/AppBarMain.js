import React, { Component } from 'react';
import Route from 'react-router-dom/Route';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';

import CoreMain from './containers/CoreMain';
import RestFulVersion2 from './containers/RestFulVersion2';

// Icons
import GitHubIcon from './icons/GitHub';
import CloseIcon from 'material-ui-icons/Close';
import ForumIcon from 'material-ui-icons/Forum';

const styles = () => ({
  root: {
    width: 256
  },
  title: {
    flex: 1,
    color: '#fff'
  },
  closeButton: {
    color: '#fff'
  }
});

class AppBarMain extends Component {
  render() {

    const { classes, onRequestClose } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} type="title">
              ThinkSNS+
            </Typography>

            <IconButton className={classes.closeButton} onClick={onRequestClose}>
              <CloseIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
        
        <Route path="/core/:version([A-Za-z0-9_\.\-]+)" render={() => (
          <CoreMain xs={true} />
        )} />

        <Route path="/v2" render={() => (
          <RestFulVersion2 xs={true} />
        )} />

        <Divider />

        <List component="div">
          <ListItem
            component="a"
            href="https://github.com/slimkit/thinksns-plus"
            aria-label="访问 ThinkSNS+ 仓库"
            alt="访问 ThinkSNS+ 仓库"
            target="_blank"
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>

          <ListItem
            component="a"
            href="https://github.com/slimkit/thinksns-plus/issues/new?labels=bug"
            aria-label="提交新的问题反馈"
            alt="提交新的问题反馈"
            target="_blank"
          >
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="反馈问题" />
          </ListItem>
        </List>

      </div>
    );
  }
}

export default withStyles(styles)(AppBarMain);
