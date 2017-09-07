import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

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

class DocsMain extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    menu: PropTypes.oneOfType([
      PropTypes.node.isRequired,
      PropTypes.element.isRequired
    ]),
  }

  render() {

    const { classes, children, menu } = this.props;

    return (
      <div className={classes.root}>
          
        <div className={classes.menu}>
          {menu}
          <span className={classes.divider} />
        </div>

        <div className={classes.docs}>
          {children}
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(DocsMain);

