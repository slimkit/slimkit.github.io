import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// Material UI
import withWidth from 'material-ui/utils/withWidth';
import withStyles from 'material-ui/styles/withStyles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const styles = () => ({
  list: {
    width: 262,
    flex: 'initial',
  },
  card: {
    width: 262,
    // background: 'linear-gradient(165deg, #7262d1, #48d7e4)'
  },
  avatar: {
    width: 64,
    height: 64,
  }
});

class Menu extends Component {
  render() {
    const { classes, width } = this.props;

    return (
      <Drawer
        open={false}
        anchor="left"
        docked={width !== 'xs'}
      >

        <Card className={classes.card} elevation={1}>
          <CardHeader
            avatar={<Avatar className={classes.avatar}>Ts</Avatar>}
            title="ThinkSNS+"
            subheader="slimkit/thinksns-plus"
          />
        </Card>

        <List className={classes.list}>
          <ListItem button component={Link} to="/demo">
            <ListItemText primary="Chelsea Otakan" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withWidth()(withStyles(styles)(Menu));
