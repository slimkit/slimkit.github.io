import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import withWidth from 'material-ui/utils/withWidth';
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
    root: {
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      paddingLeft: 256,
      paddingBottom: theme.spacing.unit * 4,
    },
    noLetfRoot: {
      paddingLeft: 0,
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
      position: 'fixed',
      width: 256,
      maxHeight: '100%',
      paddingTop: theme.spacing.unit * 4 + ToolbarMinHeight,
      [xs]: { paddingTop: theme.spacing.unit * 4 + ToolbarMinHeightXS },
      [sm]: { paddingTop: theme.spacing.unit * 4 + ToolbarMinHeightSM },
      paddingLeft: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 4,
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      flexShrink: 0,
      top: 0,
      left: 0,
      overflowY: 'auto'
    },
    divider: {
      width: 1,
      height: 'auto',
      background: '#eaeaea',
      marginLeft: theme.spacing.unit
    }
  };
};

class DocsMain extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    menu: PropTypes.oneOfType([
      PropTypes.node.isRequired,
      PropTypes.element.isRequired
    ]),
    width: PropTypes.string.isRequired
  }

  render() {

    const { classes, children, menu, width } = this.props;
    console.log(width);

    return (
      <div className={width === 'xs' ? `${classes.root} ${classes.noLetfRoot}` : classes.root}>

        {width !== 'xs' ? (
          <div className={classes.menu}>
            {menu}
            <span className={classes.divider} />
          </div>
        ) : null}

        <div className={classes.docs}>
          {children}
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(
  withWidth()(DocsMain)
);

