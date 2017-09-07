import 'highlight.js/styles/github.css';
import '../github-markdown.css';
import React, { Component } from 'react';
import marked from 'marked';
import { highlightAuto } from 'highlight.js';
import withStyles from 'material-ui/styles/withStyles';

const renderer = new marked.Renderer();

renderer.heading = (text, level) => {
  let escapedText = text
    .toLowerCase()
    .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>/g, '')
    .replace(' ', '-');

  let match = text.match(/(.*?) \{\#(.*?)\}/);
  if (match != null) {
    text = match[1];
    escapedText = match[2];
  }

  return (`
    <h${level}>
      <a name="${escapedText}"></a>
      ${text}
      <a class="anchor-link-style" href="#${escapedText}">#</a>
    </h${level}>
  `);
};

marked.setOptions({
  gfm: true,
  tables: true,
  highlight: (code) => highlightAuto(code).value,
  renderer
});

class MarkdownRender extends Component {

  render() {

    const { markdown = false } = this.props;

    if (markdown === false) {
      return null;
    }

    return (
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    );
  }
}

export default MarkdownRender;
