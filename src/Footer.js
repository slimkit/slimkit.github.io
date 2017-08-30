import React, { Component } from 'react';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';

const styles = () => ({
  root: {
    border: 'none',
    boxSizing: 'border-box',
    fontWeight: 'normal',
    color: '#202020',
    fontSize: 15,
    lineHeight: '24px',
    background: '#012129',
    boxShadow: 'inset 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    padding: '2em 0',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  }
});

class Footer extends Component {
  render() {

    const { classes } = this.props;

    return (
      <Grid className={classes.root} container component="footer">222</Grid>
    );
  }
}

export default withStyles(styles)(
  Footer
);
