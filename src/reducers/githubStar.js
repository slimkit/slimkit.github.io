import { SET } from '../actions/githubStar';

const defaultCount = 0;

export { NAME } from '../actions/githubStar';
export default (state = defaultCount, { type, count }) => ( type === SET ? count : state );
