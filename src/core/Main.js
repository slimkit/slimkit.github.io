import React, { Component } from 'react';
import withStyles from 'material-ui/styles/withStyles';
import DocsMenu from './DocsMenu';

const styles = theme => ({
  root: {
    width: '100%'
  },
  menu: {
    width: 256,
    paddingLeft: theme.spacing.unit * 2
  }
});

const tree = [
  {
    "name": "开始使用",
    "link": "get-statred",
    "items": [
      {
        "name": "什么是 ThinkSNS+",
        "link": "me"
      },
      {
        "name": "测试",
        "link": "test",
        items: [
          {
            "name": "demo",
            "link": "demo"
          }
        ]
      },
      {
        "name": "安装",
        "link": "install"
      }
    ]
  },
  {
    "name": "拓展包",
    "link": "packages"
  }
];

class Main extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
        <div className={classes.menu}>
          <DocsMenu tree={tree} prefix="" />
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Main);
