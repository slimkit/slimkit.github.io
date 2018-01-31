/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/img/plus.png',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'ThinkSNS Plus' /* title for your website */,
  tagline: '一个使用 Laravel 并健壮的社交系统',
  url: 'https://slimkit.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  editUrl: 'https://github.com/slimkit/slimkit.github.io/edit/source/docs/',
  noIndex: false,
  headerLinks: [
    {
      search: true
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
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/slimkit/thinksns-plus',
  algolia: {
    apiKey: "5e14e81576e97337f567595ea504b651",
    indexName: "slimkit"
  },
};

module.exports = siteConfig;
