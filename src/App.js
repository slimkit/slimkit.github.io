import React, { Component } from 'react';

// React Router.
import withRouter from 'react-router/withRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { styles as ToolbarStyles } from 'material-ui/Toolbar/Toolbar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

// Component
import NoMatch from './NoMatch';
import AppBarWrapper from './AppBarWrapper';
import AppMenu from './AppMenu';
import Footer from './Footer';
import AppHome from './containers/AppHome';
import Core from './containers/Core';
import RestFulVersion2 from './containers/RestFulVersion2';

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

    const { classes, location: { pathname } } = this.props;

    return (
      <div className={this.getRootClassName()}>
        <AppBar position="fixed" className={this.getAppBarClassName()}>
          <AppBarWrapper pathname={pathname} />
        </AppBar>

        <Switch>
          <Route exact path="/" component={AppHome} />
          <Route path="/core" component={Core} />
          <Route path="/v2" component={RestFulVersion2} />
          <Route component={NoMatch} />
        </Switch>

        <Footer />

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

    if (match.path === '/'  && match.isExact === true) {
      return `${classes.root} ${classes.homeRoot}`;
    }

    return classes.root;
  }

  /**
   * Get app bar component class name.
   *
   * @return {String|void}
   * @author Seven Du <shiweidu@outlook.com>
   */
  getAppBarClassName() {
    const { classes, match } = this.props;

    if (match.path === '/' && match.isExact === true) {
      return classes.homeAppBar;
    }
  }
}

export default withStyles(styles) (
  withRouter(App)
);
