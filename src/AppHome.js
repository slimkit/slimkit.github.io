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
    fallbacks: [
      { background: '#59b6d7' },
      { background: '-moz-linear-gradient(135deg, #7262d1, #48d7e4)' },
      { background: '-webkit-gradient(linear, left top, right bottom, color-stop(0%, #7262d1), color-stop(100%, #48d7e4))' },
      { background: '-webkit-linear-gradient(315deg, #7262d1, #48d7e4)' },
      { background: '-o-linear-gradient(135deg, #7262d1, #48d7e4)' },
      { background: '-ms-linear-gradient(135deg, #7262d1, #48d7e4)' },
      { background: 'linear-gradient(135deg, #7262d1, #48d7e4)' }
    ]
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
