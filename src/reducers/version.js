import { SET, NAME } from '../actions/version';

const defaultVersions = [ "latest" ];

export { NAME };
export default (state = defaultVersions, { type, versions }) => (
  type === SET ? versions : state
);
