import request from '../utils/request';

export const NAME = 'CORE/SUMMARY';
export const SET = 'CORE/SUMMARY/SET';

export const setSummary = summary => ({ type: SET, summary });

export default version => dispatch => request.get(
  `/docs/core/${version}/summary.json`
).then(({ data: summary }) => dispatch(
  setSummary(summary)
));
