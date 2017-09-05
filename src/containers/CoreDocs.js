import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';
import { NAME as summaryName } from '../actions/coreSummary';
import fetchDocsItem, { NAME as docsName } from '../actions/docs';
import MarkdownRender from '../components/MarkdownRender';

const mapStateToProps = state => {

  const { [summaryName]: summary, [docsName]: docs } = state;

  return { summary, docs };
};


class CoreDocs extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    version: PropTypes.any.isRequired,
    summary: PropTypes.array.isRequired,
    docs: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {

    const markdown = this.getMarkdown();

    return (
      <MarkdownRender markdown={markdown} />
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
    const { version } = this.props;
    const summary = this.getSummary(version, this.props.summary);

    const { [`${version}${path}`]: markdownPath } = summary;

    if (! markdownPath) {
      return false;
    }

    return `/docs/core/${version}${markdownPath}`;
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
  connect(mapStateToProps)(CoreDocs)
);
