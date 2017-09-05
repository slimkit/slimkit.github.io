import { combineReducers } from 'redux';
import githubStar, { NAME as githubStarName } from './githubStar';
import version, { NAME as versionName } from './version';
import coreSummary, { NAME as coreSummaryName } from './coreSummary';
import docs, { NAME as docsName } from './docs';

const reducers = {
  [githubStarName]: githubStar,
  [versionName]: version,
  [coreSummaryName]: coreSummary,
  [docsName]: docs
};

export default combineReducers(reducers);
