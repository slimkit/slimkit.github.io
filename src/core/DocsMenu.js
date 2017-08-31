import React, { Component } from 'react';
import List from 'material-ui/List';
import DocsMenuItem from './DocsMenuItem';

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
