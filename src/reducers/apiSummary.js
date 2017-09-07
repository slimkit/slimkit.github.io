import { SET, NAME } from '../actions/apiSummary';

export { NAME };
export default (state = [], { type, summary }) => (
  type === SET ? summary : state
);
