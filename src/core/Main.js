import React, { Component } from 'react';
import Redirect from 'react-router/Redirect';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import withStyles from 'material-ui/styles/withStyles';
import DocsMenu from './DocsMenu';
import DocsMarkdown from './DocsMarkdown';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  menu: {
    width: 256,
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'flex-end',
    boxSizing: 'border-box',
    flexShrink: 0,
  },
  divider: {
    width: 1,
    height: 'auto',
    background: '#eaeaea',
    marginLeft: theme.spacing.unit
  },
  docs: {
    width: '100%',
    flexShrink: 1,
    paddingTop: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3
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
          <span className={classes.divider} />
        </div>

        <div className={classes.docs}>
          <Switch>
            <Route strict exact path="/core" render={() => (
              <Redirect to="/core/latest/" />
            )} />

            <Route path="/core/:version([A-Za-z0-9_\.]+?)/:path*" component={DocsMarkdown} />

          </Switch>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Main);
