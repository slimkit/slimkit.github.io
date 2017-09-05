import { SET, NAME } from '../actions/docs';

export { NAME };
export default (state = {}, { type, path, content }) => (
  type === SET ? { ...state, [path]: content } : state
);
