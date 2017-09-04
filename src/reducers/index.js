import { combineReducers } from 'redux';
import githubStar, { NAME as githubStarName } from './githubStar';
import version, { NAME as versionName } from './version';

const reducers = {
  [githubStarName]: githubStar,
  [versionName]: version,
};

export default combineReducers(reducers);
