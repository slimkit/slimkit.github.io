import React, { Component } from 'react';
import withWidth from 'material-ui/utils/withWidth';
import withStyles from 'material-ui/styles/withStyles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/Inbox';

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
        items: [
          {
            name: "demo",
            link: "hehe",
          }
        ]
      },
      {
        name: '关于 ThinkSNS+',
        link: 'sm',
        markdown: 'demo.md',
      }
    ]
  }
];

// const renderNavItems = (items, prefix = '/', classes) => {

//   return (
//     <List>
//       {items.map((item, key) => renderNavItem({...item, key}, prefix, classes))}
//     </List>
//   );
// };

// const renderNavItem = (item, prefix, classes) => {
//   if (item.items) {
//     return (
//       <ListItem key={item.key} className={classes.navItem} disableGutters>
//         <Button className={classes.button}>{item.name}</Button>
//         <Collapse transitionDuration="auto" unmountOnExit in={true}>
//           {renderNavItems(item.items, `${prefix}/${item.link}`, classes)}
//         </Collapse>
//       </ListItem>
//     );
//   }

//   return (
//     <ListItem key={item.key} className={classes.navLink} disableGutters>
//       <Button className={classes.navLinkButton}>{item.name}</Button>
//     </ListItem>
//   );
// };

// const styles = theme => ({
//   button: theme.mixins.gutters({
//     borderRadius: 0,
//     justifyContent: 'flex-start',
//     textTransform: 'none',
//     width: '100%',
//     transition: theme.transitions.create('background-color', {
//       duration: theme.transitions.duration.shortest,
//     }),
//     '&:hover': {
//       textDecoration: 'none',
//     },
//   }),
//   navItem: {
//     ...theme.typography.body2,
//     display: 'block',
//     paddingTop: 0,
//     paddingBottom: 0,
//   },
//   navLink: {
//     fontWeight: theme.typography.fontWeightRegular,
//     display: 'flex',
//     paddingTop: 0,
//     paddingBottom: 0,
//   },
//   navLinkButton: {
//     color: theme.palette.text.secondary,
//     textIndent: 24,
//     fontSize: 13,
//   },
// });
// 

const styles = theme => ({
  navItem: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
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
        {/*renderNavItems(routes, '/', classes)*/}
        <List>
          <ListItem className={classes.navItem} disableGutters>
            <ListItemText primary="item 1" />
            <Collapse transitionDuration="auto" unmountOnExit in={true}>
              <List>
                <ListItem className={classes.navItem} disableGutters>
                  <ListItemText primary="item 1 - 1" />
                  <Collapse transitionDuration="auto" unmountOnExit in={true}>
                    <List>
                      <ListItem disableGutters>
                        <ListItemText primary="Chelsea Otakan" />
                      </ListItem>
                    </List>
                  </Collapse>
                </ListItem>
              </List>
            </Collapse>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(AppDrawer);
