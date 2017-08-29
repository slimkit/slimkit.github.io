import React, { Component } from 'react';

// Material UI
import withStyles from 'material-ui/styles/withStyles';

const styles = () => ({
  root: {
    flex: '1 0 100%'
  },
  welcome: {
    display: 'flex',
    flex: '0 0 auto',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#59b6d7',
  }
});

class AppHome extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.welcome}></div>
      </div>
    );
  }
}

export default withStyles(styles, {
  name: 'AppHome',
})(AppHome);
