import { get } from 'axios';

export const NAME = 'CORE/SUMMARY';
export const SET = 'CORE/SUMMARY/SET';

export const setSummary = summary => ({ type: SET, summary });

export default version => dispatch => get(
  `/docs/core/${version}/summary.json`
).then(({ data: summary }) => dispatch(
  setSummary(summary)
));
