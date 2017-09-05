import 'highlight.js/styles/default.css';
import React, { Component } from 'react';
import marked from 'marked';
import { highlightAuto } from 'highlight.js';
import withStyles from 'material-ui/styles/withStyles';

const renderer = new marked.Renderer();

renderer.heading = (text, level) => {
  let escapedText = text
    .toLowerCase()
    .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>/g, '')
    .replace(/[^\w]+/g, '-');

  let match = text.toLowerCase().match(/(\W+) \{\#(\w+)\}/);
  if (match != null) {
    text = match[1];
    escapedText = match[2];
  }

  return (`
    <h${level}>
      <a class="anchor-link" id="${escapedText}" name="${escapedText}"></a> ${text}
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

const anchorLinkStyle = theme => ({
  '& .anchor-link-style': {
    opacity: 0,
    // To prevent the link to get the focus.
    display: 'none',
  },
  '&:hover .anchor-link-style': {
    display: 'inline',
    opacity: 1,
    fontSize: '0.8em',
    lineHeight: '1',
    paddingLeft: theme.spacing.unit,
    color: theme.palette.text.hint,
  },
});

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: '0 10px',
    color: theme.palette.text.primary,
    '& .anchor-link': {
      marginTop: -theme.spacing.unit * 12, // Offset for the anchor.
      position: 'absolute',
    },
    '& pre': {
      margin: `${theme.spacing.unit * 3}px 0`,
      padding: '12px 18px',
      backgroundColor: '#f6f8fa',
      borderRadius: 3,
      overflow: 'auto',
      wordWrap: 'normal',
      // width: '100%',
      maxWidth: '100%'
    },
    '& code': {
      display: 'inline-block',
      lineHeight: 1.6,
      padding: '3px 6px',
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
      fontSize: 14
    },
    '& p code, & ul code, & pre code': {
      fontSize: 14,
      lineHeight: 1.6,
    },
    '& h1': {
      ...theme.typography.display2,
      color: theme.palette.text.secondary,
      margin: '0.7em 0',
      ...anchorLinkStyle(theme),
    },
    '& h2': {
      ...theme.typography.display1,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em',
      ...anchorLinkStyle(theme),
    },
    '& h3': {
      ...theme.typography.headline,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em',
      ...anchorLinkStyle(theme),
    },
    '& h4': {
      ...theme.typography.title,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em',
      ...anchorLinkStyle(theme),
    },
    '& p, & ul, & ol': {
      lineHeight: 1.6,
    },
    '& table': {
      width: '100%',
      display: 'block',
      overflowX: 'auto',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      overflow: 'hidden',
    },
    '& thead': {
      fontSize: 12,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
    },
    '& tbody': {
      fontSize: 13,
      lineHeight: 1.5,
      color: theme.palette.text.primary,
    },
    '& td': {
      borderBottom: `1px solid ${theme.palette.text.lightDivider}`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 5}px ${theme.spacing.unit}px ${theme
        .spacing.unit * 3}px`,
      textAlign: 'left',
    },
    '& td:last-child': {
      paddingRight: theme.spacing.unit * 3,
    },
    '& td compact': {
      paddingRight: theme.spacing.unit * 3,
    },
    '& td code': {
      fontSize: 13,
      lineHeight: 1.6,
    },
    '& th': {
      whiteSpace: 'pre',
      borderBottom: `1px solid ${theme.palette.text.lightDivider}`,
      padding: `0 ${theme.spacing.unit * 5}px 0 ${theme.spacing.unit * 3}px`,
      textAlign: 'left',
    },
    '& th:last-child': {
      paddingRight: theme.spacing.unit * 3,
    },
    '& tr': {
      height: 48,
    },
    '& thead tr': {
      height: 64,
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& blockquote': {
      borderLeft: `5px solid ${theme.palette.text.hint}`,
      background: theme.palette.background.paper,
      padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 3}px`,
      margin: `${theme.spacing.unit * 3}px 0`,
    },
    '& a, & a code': {
      // Style taken from the Link component
      color: theme.palette.secondary.A400,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});

class MarkdownRender extends Component {

  render() {

    const { markdown = false, classes } = this.props;

    if (markdown === false) {
      return null;
    }

    return (
      <div
        className={classes.root}
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    );
  }
}

export default withStyles(styles)(MarkdownRender);
