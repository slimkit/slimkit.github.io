import React, { Component } from 'react';
import PropTypes from 'prop-types';

console.log(PropTypes);

class CoreMenu extends Component {

  static propTypes = {
    version: PropTypes.any.isRequired
  }

  render() {

    console.log(this.props);

    return (
      <div>222</div>
    );
  }
}

export default CoreMenu;
