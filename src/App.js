import React, { Component } from 'react';

// React Router.
import withRouter from 'react-router/withRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { styles as ToolbarStyles } from 'material-ui/Toolbar/Toolbar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

// Icons
import GitHubIcon from './icons/GitHub';

// Component
import AppHome from './AppHome';

const styles = theme => {

  // Get ToolBar min height.
  const xs = `${theme.breakpoints.up('xs')} and (orientation: landscape)`;
  const sm = theme.breakpoints.up('sm');
  const { root: {
    minHeight: ToolbarMinHeight,
    [xs]: {
      minHeight: ToolbarMinHeightXS,
    },
    [sm]: {
      minHeight: ToolbarMinHeightSM,
    }
  }} = ToolbarStyles(theme);

  return {
    flex: {
      flex: 1
    },
    root: {
      width: '100%',
      marginTop: ToolbarMinHeight,
      [xs]: {
        marginTop: ToolbarMinHeightXS
      },
      [sm]: {
        marginTop: ToolbarMinHeightSM
      }
    },
    tabItem: {
      height: ToolbarMinHeight,
      [xs]: {
        height: ToolbarMinHeightXS
      },
      [sm]: {
        height: ToolbarMinHeightSM
      }
    },
    homeRoot: {
      marginTop: 0,
      [xs]: { marginTop: 0 },
      [sm]: { marginTop: 0 }
    },
    homeAppBar: {
      boxShadow: 'none',
      backgroundColor: 'transparent'
    }
  };
};

class App extends Component {

  /**
   * Render the component.
   *
   * @return {Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div className={this.getRootClassName()}>
        <AppBar position="fixed" className={this.getAppBarClassName()}>
          <Toolbar>

            <Tabs value="demo" onChange={() => {}}>
              <Tab className={classes.tabItem} label="文档" value="2" />
              <Tab className={classes.tabItem} label="核心 API" value="3" />
            </Tabs>

            <Typography type="title" color="inherit" className={classes.flex} />
            
            <IconButton
              component="a"
              href="https://github.com/slimkit/thinksns-plus"
              aria-label="访问 ThinkSNS+ 仓库"
              alt="访问 ThinkSNS+ 仓库"
              target="_blank"
            >
              <GitHubIcon color="#fff" />
            </IconButton>

          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={AppHome} />
        </Switch>

      </div>
    );
  }

  /**
   * Get root class name.
   *
   * @return {String}
   * @author Seven Du <shiweidu@outlook.com>
   */
  getRootClassName() {
    const { classes, match } = this.props;

    return classes.root + (match.path === '/' ? ` ${classes.homeRoot}` : '');
  }

  /**
   * Get app bar component class name.
   *
   * @return {String|void}
   * @author Seven Du <shiweidu@outlook.com>
   */
  getAppBarClassName() {
    const { classes, match } = this.props;

    if (match.path === '/') {
      return classes.homeAppBar;
    }
  }
}

export default withStyles(styles, { name: 'app' }) (
  withRouter(App)
);
