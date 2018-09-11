/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'ThinkSNS+ 演示站点',
    image: '/img/plus.png',
    infoLink: 'https://tsplus.zhibocloud.cn',
    pinned: true,
  },
  {
    caption: '中国蓝 TV',
    image: 'https://sns.cztv.com/assets/logo.png',
    infoLink: 'http://tv.cztv.com/',
    pinned: true
  }
];

const siteConfig = {
  title: 'Plus (ThinkSNS+)' /* title for your website */,
  tagline: '💝The Plus(ThinkSNS+) is a powerful, easy-to-develop social system built with Laravel. ',
  url: 'https://slimkit.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  editUrl: 'https://github.com/slimkit/slimkit.github.io/edit/source/docs/',
  noIndex: false,
  headerLinks: [
    {
      search: true
    },
    {
      href: '/plus/',
      label: '文档 [New]'
    },
    {
      doc: 'server-getting-started-installation',
      label: '文档'
    },
    {
      doc: 'api-v2-overview',
      label: 'REST API v2'
    },
    {
      page: 'new-issue',
      label: "反馈"
    },
    {
      href: 'https://github.com/slimkit',
      label: 'GitHub'
    },
    // {doc: 'server-started', label: 'Docs'},
    // {doc: 'android-started', label: 'API'},
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/plus.png',
  footerIcon: 'img/plus.png',
  favicon: 'favicon.ico',
  /* colors for website */
  colors: {
    primaryColor: '#1E88E5',
    secondaryColor: '#64B5F6',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Chengdu ZhiYiChuangXiang Technology Co., Ltd. All rights reserved.',
  organizationName: 'slimkit', // or set an env variable ORGANIZATION_NAME
  projectName: 'slimkit.github.io', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'atom-one-dark',
  },
  markdownPlugins: [
    // function (md) {
    //   md.renderer.rules.heading_open = function (tokens, idx /*, options, env */) {
    //     const textToken = tokens[idx + 1];
    //     return (
    //       '<h' +
    //       tokens[idx].hLevel +
    //       '><a class="anchor" aria-hidden="true" id="' +
    //       textToken.content +
    //       '"></a><a href="#' +
    //       textToken.content +
    //       '" aria-hidden="true" class="hash-link" ><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>'
    //     );
    //   };
    // },
  ],
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/slimkit/thinksns-plus',
  algolia: {
    apiKey: "5e14e81576e97337f567595ea504b651",
    indexName: "slimkit",
    algoliaOptions: {
      hitsPerPage: 5,
    }
  },
  onPageNav: 'separate',
};

module.exports = siteConfig;
