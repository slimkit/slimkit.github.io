import React, { Component } from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';
import PropTypes from 'prop-types';
import fetchDocsItem, { NAME as docsName } from '../actions/docs';
import MarkdownRender from '../components/MarkdownRender';

const mapStateToProps = state => {

  const { [docsName]: docs } = state;

  return { docs };
};

class RestFulVersion2Docs extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    docs: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    summary: PropTypes.array.isRequired
  }

  render() {
    return (
      <MarkdownRender markdown={this.getMarkdown()} />
    );
  }

  getMarkdown() {
    const markdownPath = this.getMarkdownPath();

    if (markdownPath === false) {
      return false;
    }

    const { [markdownPath]: markdown } = this.props.docs;

    if (markdown === undefined) {
      const { dispatch } = this.props;
      dispatch(
        fetchDocsItem(markdownPath)
      );

      return false;
    }

    return markdown;
  }

  getSummary(prefix = '', summary = []) {

    if (! summary.length) {
      return {};
    }

    return summary.reduce((reduce, item) => {

      if (item.items) {
        return {...reduce, ...this.getSummary(`${prefix}/${item.path}`, item.items)};
      }

      return {
        ...reduce,
        [`${prefix}/${item.path}`]: item.markdown
      };
    }, {});
  }

  getMarkdownPath() {
    const path = this.getPath();
    const summary = this.getSummary('', this.props.summary);

    const { [path]: markdownPath1, [`${path}/`]: markdownPath2 } = summary;

    if (! markdownPath1 && ! markdownPath2) {
      return false;
    }

    return `/docs/v2${markdownPath1 ? markdownPath1 : markdownPath2}`;
  }

  getPath() {

    const { match: { params: { path } } } = this.props;

    if (! path) {
      return '/';
    } else if (path[0] !== '/') {
      return '/'+path;
    }

    return path;
  }
}

export default withRouter(
  connect(mapStateToProps)(RestFulVersion2Docs)
);
