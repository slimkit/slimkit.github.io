import React, { Component } from 'react';

// React Router.
import withRouter from 'react-router/withRouter';
import matchPath from 'react-router/matchPath';
import Link from 'react-router-dom/Link';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import Tabs, { Tab } from 'material-ui/Tabs';
import { styles as ToolbarStyles } from 'material-ui/Toolbar/Toolbar';

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

    // Tabs item.
    tab: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'none',
      height: ToolbarMinHeight,
      [xs]: {
        height: ToolbarMinHeightXS
      },
      [sm]: {
        height: ToolbarMinHeightSM
      }
    }
  };

};

class AppMenu extends Component {
  render() {

    const { classes } = this.props;
    console.log(this.getTabsValue());

    return (
      <Tabs value={this.getTabsValue()} onChange={() => {}}>
        <Tab className={classes.tab} label="ThinkSNS+" value="/" component={Link} to="/" />
        <Tab className={classes.tab} label="核心" value="/core" component={Link} to="/core" />
        <Tab className={classes.tab} label="REST API v2" value="/v2" component={Link} to="/v2" />
      </Tabs>
    );
  }

  getTabsValue() {
    const { location: { pathname } } = this.props;

    return ['/', '/core', '/v2'].reduce((reduce, item) => {

      let match;
      if ((match = matchPath(pathname, { path: item })) !== null) {
        return match.path;
      }
  
      return reduce;
    }, '/');

  }
}

export default withStyles(styles)(
  withRouter(AppMenu)
);
