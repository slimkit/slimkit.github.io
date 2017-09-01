import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Icons
import CloudDownloadIcon from 'material-ui-icons/CloudDownload';
import StarIcon from 'material-ui-icons/Star';
import MoodIcon from 'material-ui-icons/Mood';

const styles = theme => ({
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
  },
  buttonBox: {
    marginTop: 24,
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit
  },
  starCount: {
    position: 'relative',
    textTransform: 'none',
    '&::before': {
      content: " ",
      display: 'block',
      position: 'absolute',
      top: 0,
      left: -5
    }
  }
});

class AppHome extends Component {

  render() {

    console.log(this.props);
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.welcome}>
          <img className={classes.logo} alt="ThinkSNS+" aria-label="ThinkSNS Plus logo" src="https://github.com/slimkit/thinksns-plus/raw/master/public/plus.png" />
          <div className={classes.basic}>
            <Typography className={classes.inheritColor} type="display2">ThinkSNS+</Typography>
            <Typography className={`${classes.inheritColor} ${classes.title}`} type="subheading">基于 Laravel 开发的用户生态系统</Typography>
          </div>
          <div className={classes.buttonBox}>
            <Button className={classes.button} raised color="primary" href="https://github.com/slimkit/thinksns-plus/releases">
              <CloudDownloadIcon /> &nbsp; Download
            </Button>
            <Button className={classes.button} raised color="accent" href="https://github.com/slimkit/thinksns-plus/stargazers">
              <StarIcon /> &nbsp; Star&nbsp;{this.getStarCount()}
            </Button>
            <Button raised color="contrast" className={classes.button} component={Link} to="/core">
              <MoodIcon /> &nbsp; 阅读文档
            </Button>
          </div>
        </div>
      </div>
    );
  }

  getStarCount() {
    const { count } = this.props;

    if (! count) {
      return '';
    }

    if (count >= 10000000) {
      return Math.round(count / 10000000) + 'KW';
    } else if (count >= 100000) {
      return Math.round(count / 10000) + 'W';
    } else if (count >= 1000) {
      return Math.round(count / 1000) + 'K';
    }

    return parseInt(count);

  }
}

export default withStyles(styles)(AppHome);
