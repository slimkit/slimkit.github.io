import React, { Component } from 'react';
import withWidth from 'material-ui/utils/withWidth';
import withStyles from 'material-ui/styles/withStyles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';

const routes = [
  {
    name: '关于 ThinkSNS+',
    link: 'ab',
    markdown: 'ab.md',
    items: [
      {
        name: '关于 ThinkSNS+',
        link: 'haha',
        markdown: 'demo.md',
      },
      {
        name: '关于 ThinkSNS+',
        link: 'sm',
        markdown: 'demo.md',
      }
    ]
  }
];

const renderNavItems = (items, prefix = '/', classes) => {

  return (
    <List>
      {items.map((item, key) => renderNavItem({...item, key}, prefix, classes))}
    </List>
  );
};

const renderNavItem = (item, prefix, classes) => {
  if (item.items) {
    return (
      <ListItem key={item.key} className={classes.navItem}>
        <Button className={classes.button}>{item.name}</Button>
        <Collapse transitionDuration="auto" unmountOnExit in={true}>
          {renderNavItems(item.items, `${prefix}/${item.link}`, classes)}
        </Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem key={item.key}>
      <Button className={classes.button}>{item.name}</Button>
    </ListItem>
  );
};

const styles = theme => ({
  button: theme.mixins.gutters({
    borderRadius: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      textDecoration: 'none',
    },
  }),
  navItem: {
    ...theme.typography.body2,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  }
});

class AppDrawer extends Component {
  render() {
    const { open, onRequestClose, classes } = this.props;

    return (
      <Drawer
        open={open}
        anchor="left"
        onRequestClose={onRequestClose}
      >
        {renderNavItems(routes, '/', classes)}
      </Drawer>
    );
  }
}

export default withStyles(styles)(AppDrawer);
