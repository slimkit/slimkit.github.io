import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';
import Route from 'react-router-dom/Route';
import CoreMenu from './CoreMenu';

class CoreMain extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {

    const { match: { params: { version = 'latest' } } } = this.props;
    console.log(this.props);

    return (
      <div>
        <CoreMenu version={version} />
      </div>
    );
  }
}

export default withRouter(CoreMain);
