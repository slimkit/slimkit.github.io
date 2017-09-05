import { get } from 'axios';

export const NAME = 'DOCS';
export const SET = 'DOCS/SET';

export const setDocsItem = (path, content) => ({ type: SET, path, content });

export default path => dispatch => get(path).then(({ data }) => dispatch(
  setDocsItem(path, data)
));
