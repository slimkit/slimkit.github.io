import { get as getRequest } from 'axios';

export const NAME = 'CORE/VERSION';
export const SET  = 'CORE/VERSION/SET';

export const setVersion = (versions = []) => ({ type: SET, versions });

export default () => dispatch => getRequest(
  '/docs/core/version.json'
).then(({ data = [] }) => dispatch(
  setVersion(data)
));
