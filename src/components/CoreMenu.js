import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// Material UI
import Menu, { MenuItem } from 'material-ui/Menu';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Divider from 'material-ui/Divider';

// Icons
import ListIcon from 'material-ui-icons/List';

import CoreMenuRender from './CoreMenuRender';

const symmary = [
    {
        "name": "什么是 ThinkSNS+",
        "path": "",
        "markdown": "/readme.md"
    },
    {
        "name": "快速开始",
        "path": "getting-started",
        "items": [
            {
                "name": "安装 ThinkSNS+",
                "path": "installed",
                "markdown": "/getting-started/installed.md"
            }
        ]
    }
];


class CoreMenu extends Component {

  state = {
    versionSelect: false,
  }

  render() {

    console.log(this.props);
    const { version, versions } = this.props;
    const { versionSelect } = this.state;

    return (
      <List component="div" >
        <ListItem button component="div" aria-owns="version-select" onClick={() => this.handleVersionSelectOpen()}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="核心版本" secondary={version} />
        </ListItem>

        <Menu id="version-select" open={versionSelect} onRequestClose={() => this.handleVersionSelectClose()}>
          {versions.map((item, key) => (
            <MenuItem key={key} component={Link} to={`/core/${item}`}>{item}</MenuItem>
          ))}
        </Menu>

        <Divider />

        {symmary.map((item, key) => (
          <CoreMenuRender key={key} tree={item} prefix={`/core/${version}`} />
        ))}

      </List>
    );
  }

  handleVersionSelectOpen() {
    this.setState({
      ...this.state,
      versionSelect: true
    });
  }

  handleVersionSelectClose() {
    this.setState({
      ...this.state,
      versionSelect: false
    });
  }
}

export default CoreMenu;
