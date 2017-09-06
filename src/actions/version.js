import request from '../utils/request';

export const NAME = 'CORE/VERSION';
export const SET  = 'CORE/VERSION/SET';

export const setVersion = (versions = []) => ({ type: SET, versions });

export default () => dispatch => request.get(
  '/docs/core/version.json'
).then(({ data = [] }) => dispatch(
  setVersion(data)
));
