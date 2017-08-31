import React, { Component } from 'react';

// Material UI
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

// Component
import DocsMenu from './DocsMenu';

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

export default DocsMenuItem;
