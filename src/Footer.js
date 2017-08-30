import React, { Component } from 'react';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = () => ({
  root: {
    border: 'none',
    boxSizing: 'border-box',
    fontWeight: 'normal',
    color: '#202020',
    maxWidth: '100%',
    fontSize: 15,
    lineHeight: '24px',
    background: '#012129',
    boxShadow: 'inset 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    padding: '2em',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  }
});

class Footer extends Component {
  render() {

    const { classes } = this.props;

    return (
      <footer className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm>
            <Paper className={classes.paper}>Docs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Community</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>More</Paper>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

export default withStyles(styles)(
  Footer
);
