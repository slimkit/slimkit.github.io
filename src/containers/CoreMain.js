import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get as getRequest } from 'axios';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';
import Route from 'react-router-dom/Route';
import CoreMainComponent from '../components/CoreMain';
import CoreMenu from './CoreMenu';
import fetchSummary, { NAME as summaryName } from '../actions/coreSummary';

const mapStateToProps = state => {

  const { [summaryName]: summary } = state;

  return { summary };
};

class CoreMain extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    summary: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
  }

  render() {

    const { match: { params: { version = 'latest' }, url }, summary = [], xs = false } = this.props;

    if (xs) {
      return (
        <CoreMenu version={version} summary={summary} />
      );
    }

    return (
      <CoreMainComponent version={version} summary={summary} url={url} />
    );
  }

  componentDidMount() {
    const { match: { params: { version = 'latest' } }, dispatch } = this.props;

    dispatch(
      fetchSummary(version)
    );
  }

  componentDidUpdate(props) {

    const { match: { params: { version: newVersion } }, dispatch } = this.props;
    const { params: { version: oldVersion } } = props.match;

    if (oldVersion !== newVersion) {
      dispatch(
        fetchSummary(newVersion)
      );
    }
  }
}

export default withRouter(
  connect(mapStateToProps)(CoreMain)
);
