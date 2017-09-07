import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import CoreMenu from '../containers/CoreMenu';
import CoreDocs from '../containers/CoreDocs';
import DocsMain from './DocsMain';

class CoreMain extends Component {

  static propTypes = {
    version: PropTypes.any.isRequired,
    summary: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
  }

  render() {

    const { url, version, summary } = this.props;

    return (
      <DocsMain
        menu={<CoreMenu version={version} summary={summary} />}
      >
        <Route path={`${url}/:path*`} render={() => (
          <CoreDocs version={version} />
        )} />
      </DocsMain>
    );
  }
}

export default CoreMain;
