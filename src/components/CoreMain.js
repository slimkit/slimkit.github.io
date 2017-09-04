import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import CoreMenu from '../containers/CoreMenu';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  menu: {
    width: 256,
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    flexShrink: 0,
  },
  divider: {
    width: 1,
    height: 'auto',
    background: '#eaeaea',
    marginLeft: theme.spacing.unit
  },
  docs: {
    width: '100%',
    flexShrink: 1,
    paddingTop: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3
  }
});

class CoreMain extends Component {

  static propTypes = {
    version: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired,
    summary: PropTypes.array.isRequired
  }

  render() {

    const { version, classes, summary } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.menu}>
          <CoreMenu version={version} summary={summary} />
          <span className={classes.divider} />
        </div>
        <div className={classes.docs}>xxx</div>
      </div>
    );
  }
}

export default withStyles(styles)(CoreMain);
