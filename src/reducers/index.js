import { combineReducers } from 'redux';
import githubStar, { NAME as githubStarName } from './githubStar';
import version, { NAME as versionName } from './version';
import coreSummary, { NAME as coreSummaryName } from './coreSummary';
import apiSummary, { NAME as apiSummaryName } from './apiSummary';
import docs, { NAME as docsName } from './docs';

const reducers = {
  [githubStarName]: githubStar,
  [versionName]: version,
  [coreSummaryName]: coreSummary,
  [apiSummaryName]: apiSummary,
  [docsName]: docs
};

export default combineReducers(reducers);
