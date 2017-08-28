import React, { Component } from 'react';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { styles as toolbarStyles } from 'material-ui/Toolbar/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

// Material Icon
import MenuIcon from 'material-ui-icons/Menu';

// Components
import Menu from './Menu';

const styles = (theme) => {
  const xs = `${theme.breakpoints.up('xs')} and (orientation: landscape)`;
  const sm = theme.breakpoints.up('sm');
  const { root: {
    minHeight: rootMarginTop,
    [xs]: {
      minHeight: rootMarginTop_xs,
    },
    [sm]: {
      minHeight: rootMarginTop_sm,
    }
  }} = toolbarStyles(theme);

  return {
    root: {
      width: '100%',
      marginTop: rootMarginTop,
      [xs]: {
        marginTop: rootMarginTop_xs,
      },
      [sm]: {
        marginTop: rootMarginTop_sm,
      }
    },
    flex: {
      flex: 1
    },
    appbar: {
      background: 'linear-gradient(175deg, #7262d1, #48d7e4)'
    }
  };
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="fixed">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <Menu />
      </div>
    );
  }
}

export default withStyles(styles)(App);
