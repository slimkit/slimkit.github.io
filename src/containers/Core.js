import React, { Component } from 'react';
import Redirect from 'react-router/Redirect';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import CoreMain from './CoreMain';

class Core extends Component {
  render() {
    return (
      <Switch>
        <Route strict exact path="/core" render={() => (
          <Redirect to="/core/latest" />
        )} />

        <Route path="/core/:version([A-Za-z0-9_\.\-]+)" component={CoreMain} />
      </Switch>
    );
  }
}

export default Core;

