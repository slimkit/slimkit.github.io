import request from '../utils/request';

export const NAME = 'API/SUMMARY';
export const SET = 'API/SUMMARY/SET';

export const setSummary = summary => ({ type: SET, summary });

export default () => dispatch => request.get(
  `/docs/v2/summary.json`
).then(({ data: summary }) => dispatch(
  setSummary(summary)
));
