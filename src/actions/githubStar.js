import { get as getRequest } from 'axios';

export const NAME = 'GITHUB/STAR';
export const SET = 'GITHUB/STAR/SET';

export const setStarCount = count => ({ type: SET, count });

export default () => dispatch => getRequest(
  'https://api.github.com/repos/slimkit/thinksns-plus'
).then(({ data: { stargazers_count } }) => dispatch(
  setStarCount(stargazers_count)
));
