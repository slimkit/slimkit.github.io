import { combineReducers } from 'redux';
import githubStar, { NAME as githubStarName } from './githubStar';
import version, { NAME as versionName } from './version';
import coreSummary, { NAME as coreSummaryName } from './coreSummary';

const reducers = {
  [githubStarName]: githubStar,
  [versionName]: version,
  [coreSummaryName]: coreSummary
};

export default combineReducers(reducers);
