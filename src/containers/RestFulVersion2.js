import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';
import fetchSummary, { NAME as summaryName } from '../actions/apiSummary';
import ApiDocs from '../components/ApiDocs';

const mapStateToProps = state => {
  const { [summaryName]: summary } = state;

  return { summary };
};

class RestFulVersion2 extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    summary: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
  }

  render() {

    const { summary, location: { pathname } } = this.props;

    return (
      <ApiDocs summary={summary} pathname={pathname ? pathname : '/v2/'} />
    );
  }

  componentDidMount() {
    const { summary, dispatch } = this.props;

    if (! summary.length) {
      dispatch(fetchSummary());
    }
  }
}

export default withRouter(
  connect(mapStateToProps)(RestFulVersion2)
);
