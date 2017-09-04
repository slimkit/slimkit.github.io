import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';
import Route from 'react-router-dom/Route';
import CoreMainComponent from '../components/CoreMain';

class CoreMain extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {

    const { match: { params: { version = 'latest' } } } = this.props;

    return (
      <CoreMainComponent version={version} />
    );
  }
}

export default withRouter(CoreMain);
