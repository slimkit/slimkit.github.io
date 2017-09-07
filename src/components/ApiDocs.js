import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import Route from 'react-router-dom/Route';
import DocsMain from './DocsMain';
import MenuRender from './MenuRender';
import RestFulVersion2Docs from '../containers/RestFulVersion2Docs';

class ApiDocs extends Component {

  static propTypes = {
    summary: PropTypes.array.isRequired,
    pathname: PropTypes.string.isRequired
  }

  render() {

    const { summary, pathname } = this.props;

    return (
      <DocsMain
        menu={<List component="div">
          {summary.map((item, key) => (
            <MenuRender key={key} tree={item} prefix='/v2' pathname={pathname} />
          ))}
        </List>}
      >
        <Route path="/v2/:path*" render={() => (
          <RestFulVersion2Docs summary={summary} />
        )} />
      </DocsMain>
    );
  }
}

export default ApiDocs;
