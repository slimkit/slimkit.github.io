import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchGitHubStar, { NAME as githubStarName } from '../actions/githubStar';
import AppHomeComponent from '../components/AppHome';

const mapStateToProps = state => {

  const { [githubStarName]: count } = state;

  return { count };
};

class AppHome extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired
  }

  render() {
    
    const { count } = this.props;
    
    return (
      <AppHomeComponent count={count} />
    );
  }

  componentDidMount() {
    const { dispatch, count } = this.props;

    if (! count) {
      dispatch(fetchGitHubStar());
    }
  }
}

export default connect(mapStateToProps)(AppHome);

