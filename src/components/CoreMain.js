import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import withStyles from 'material-ui/styles/withStyles';
import Drawer from 'material-ui/Drawer';
import CoreMenu from '../containers/CoreMenu';
import CoreDocs from '../containers/CoreDocs';

const styles = theme => ({
  root: {
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: 256,
    position: 'relative',
  },
  docs: {
    width: '100%',
    flexShrink: 1,
    paddingTop: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    boxSizing: 'border-box',
  },
  menu: {
    width: 256,
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    flexShrink: 0,
    position: 'absolute',
    left: 0
  },
  divider: {
    width: 1,
    height: 'auto',
    background: '#eaeaea',
    marginLeft: theme.spacing.unit
  },
});

class CoreMain extends Component {

  static propTypes = {
    version: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired,
    summary: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
  }

  render() {

    const { version, classes, summary, url } = this.props;

    return (
      <div className={classes.root}>
          
        <div className={classes.menu}>
          <CoreMenu version={version} summary={summary} />
          <span className={classes.divider} />
        </div>

        <div className={classes.docs}>
          <Route path={`${url}/:path*`} render={() => (
            <CoreDocs version={version} />
          )} />
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(CoreMain);
