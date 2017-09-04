import { SET, NAME } from '../actions/coreSummary';

export { NAME };
export default (state = [], { type, summary }) => (
  type === SET ? summary : state
);
