import { combineReducers } from 'redux';
import githubStar, { NAME as githubStarName } from './githubStar';

const reducers = {
  [githubStarName]: githubStar
};

export default combineReducers(reducers);
