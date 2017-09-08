import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';
import matchPath from 'react-router/matchPath';

// Material UI
import withWidth from 'material-ui/utils/withWidth';
import withStyles from 'material-ui/styles/withStyles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';

// Icons
import MenuIcon from 'material-ui-icons/Menu';
import GitHubIcon from './icons/GitHub';

import AppMenu from './AppMenu';
import AppBarMain from './AppBarMain';

const styles = () => ({
  flex: {
    flex: 1
  },
  menuIcon: {
    color: '#fff',
  }
});

class AppBarWrapper extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
  }

  state = { open: false }

  render() {

    const { classes, width, pathname } = this.props;
    const { open } = this.state;
    const isDoc = ['/core', '/v2'].reduce((value, path) => {
      return matchPath(pathname, { path }) !== null ? true : value;
    }, false);
    const isXs = width === 'xs' && isDoc;

    return (
      <Toolbar>

        {isXs && (
          <IconButton className={classes.menuIcon} onClick={() => this.handleDrawerOpen()}>
            <MenuIcon />
          </IconButton>
        )}

        <AppMenu />

        <Typography type="title" color="inherit" className={classes.flex} />

        {isXs ? (
          <Drawer
            open={open}
            onRequestClose={() => this.handleDrawerClose()}
          >
            <AppBarMain onRequestClose={() => this.handleDrawerClose()} /> 
          </Drawer>
        ) : (
          <IconButton
            className={classes.menuIcon}
            component="a"
            href="https://github.com/slimkit/thinksns-plus"
            aria-label="访问 ThinkSNS+ 仓库"
            alt="访问 ThinkSNS+ 仓库"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        )}

      </Toolbar>
    );
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }
}

export default withStyles(styles)(

  withWidth()(AppBarWrapper)
);
