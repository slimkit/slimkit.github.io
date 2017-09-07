import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router';
import Link from 'react-router-dom/Link';

// Material UI
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

class MenuRender extends Component
{
  static propTypes = {
    tree: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired
  }

  state = { expand: false }

  render() {
    const { tree, prefix, pathname } = this.props;
    const { expand } = this.state;

    if (! tree.items) {
      return (
        <ListItem button component={Link} to={`${prefix}/${tree.path}`}>
          <ListItemText primary={tree.name} />
        </ListItem>
      );
    }

    return (
      <div>
        <ListItem style={{ width: '100%' }} component={Button} onClick={() => this.handleExpandClick()}>
          <ListItemText style={{ textAlign: 'left' }} primary={tree.name} />
          <ListItemIcon>
            { expand ? (<ExpandLessIcon />) : (<ExpandMoreIcon />) }
          </ListItemIcon>
        </ListItem>
        <Collapse transitionDuration="auto" unmountOnExit in={expand}>
          <List style={{ paddingLeft: 16 }}>
            {tree.items.map((item, key) => (
              <MenuRender key={key} tree={item} prefix={`${prefix}/${tree.path}`} pathname={pathname} />
            ))}
          </List>
        </Collapse>
      </div>
    );

  }

  handleExpandClick() {
    this.setState({ expand: ! this.state.expand });
  }

  componentDidMount() {
    const { tree, prefix, pathname } = this.props;
    const path = `${prefix}/${tree.path}`;

    if (matchPath(pathname, { path })) {
      this.setState({ expand: true });
    }
  }
}

export default MenuRender;
