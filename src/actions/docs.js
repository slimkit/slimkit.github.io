import request from '../utils/request';

export const NAME = 'DOCS';
export const SET = 'DOCS/SET';

export const setDocsItem = (path, content) => ({ type: SET, path, content });

export default path => dispatch => request.get(path).then(({ data }) => dispatch(
  setDocsItem(path, data)
));
