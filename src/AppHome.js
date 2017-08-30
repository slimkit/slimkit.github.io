import React, { Component } from 'react';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';

const styles = () => ({
  root: {
    flex: '1 0 100%'
  },
  welcome: {
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 0 auto',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '64px 0',
    width: '100%',
    fallbacks: [
      { background: '#59b6d7' },
      { background: '-moz-linear-gradient(135deg, #7262d1, #48d7e4)' },
      { background: '-webkit-gradient(linear, left top, right bottom, color-stop(0%, #7262d1), color-stop(100%, #48d7e4))' },
      { background: '-webkit-linear-gradient(315deg, #7262d1, #48d7e4)' },
      { background: '-o-linear-gradient(135deg, #7262d1, #48d7e4)' },
      { background: '-ms-linear-gradient(135deg, #7262d1, #48d7e4)' },
      { background: 'linear-gradient(135deg, #7262d1, #48d7e4)' }
    ]
  },
  logo: {
    minHeight: 128,
    maxHeight: 230,
    margin: '20px 0'
  },
  basic: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  inheritColor: {
    color: '#fff',
  },
  title: {
    maxWidth: 500,
    textAlign: 'center',
  }
});

class AppHome extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.welcome}>
          <img className={classes.logo} alt="ThinkSNS+" aria-label="ThinkSNS Plus logo" src="https://github.com/slimkit/thinksns-plus/raw/master/public/plus.png" />
          <div className={classes.basic}>
            <Typography className={classes.inheritColor} type="display2">ThinkSNS+</Typography>
            <Typography className={`${classes.inheritColor} ${classes.title}`} type="subheading">基于 Laravel 开发的用户生态系统</Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, {
  name: 'AppHome',
})(AppHome);
