import React, { Component, cloneElement } from 'react';

// Material UI
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

class DocsMenuItem extends Component {

  state = { expand: false };

  render() {

    const { tree, prefix } = this.props;
    const { expand = false } = this.state;

    if (!! tree.items) {
      return (
        <div>
          <ListItem style={{ width: '100%' }} component={Button} onClick={() => this.handleExpandClick()}>
            <ListItemText style={{ textAlign: 'left' }} primary={tree.name} />
            <ListItemIcon>
              { expand ? (<ExpandLessIcon />) : (<ExpandMoreIcon />) }
            </ListItemIcon>
          </ListItem>
          <Collapse transitionDuration="auto" unmountOnExit in={expand}>
            <DocsMenu tree={tree.items} prefix={`${prefix}/${tree.link}`} style={{ paddingLeft: 16 }} />
          </Collapse>
        </div>
      );
    }

    return (
      <ListItem button component="div" href={`${prefix}/${tree.link}`}>
        <ListItemText primary={tree.name} />
      </ListItem>
    );

  }

  handleExpandClick() {
    this.setState({ expand: ! this.state.expand });
  }
}

class DocsMenu extends Component {
  render() {

    const { tree, prefix, ...props } = this.props;

    return (
      <List component="div" {...props}>

        {tree.map((item, key) => (
          <DocsMenuItem key={key} tree={item} prefix="core" />
        ))}

      </List>
    );
  }
}

export default DocsMenu;


/*
<ListItem component="div">
            <ListItemText primary="开始使用" />
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          <List style={{ padding: "0 16px" }}>
            <ListItem button>
              <ListItemText primary="关于 ThinkSNS+" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="安装" />
            </ListItem>
          </List>


        <ListItem component="div" button>
          <ListItemText primary="开始使用" />
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
 */
