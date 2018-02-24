/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('plus.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('server-getting-started-installation.html', language)}>文档</Button>
            <Button href="#">GitHub</Button>
            {/* <Button href={docUrl('doc1.html', language)}>Example Link</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: '使用 PHP 进行开发，并使用「严格模式」来增强代码的可读性。',
        image: imgUrl('php-logo.png'),
        imageAlign: 'top',
        title: 'PHP 7',
      },
      {
        content: '采用 Laravel 进行开发，并以目前 Laravel 半年升级发布计划，进行版本升级管理。',
        image: imgUrl('laravel.jpeg'),
        imageAlign: 'top',
        title: 'Laravel',
      },
    ]}
  </Block>
);

const InstallVideo = props => (
  <Container
    padding={['bottom', 'top']}
    background="light"
  >
    <div className="blockElement imageAlignSide imageAlignLeft">
      <div className="blockImage">
        <video
          controls
          src="http://www.thinksns.com/data/upload/ueditor/20180203/5a755820d33d8.mp4"
          poster={imgUrl('install-video-image.png')}
          style={{
            maxWidth: '100%',
          }}
        />
      </div>
      <div className="blockContent">
        <h2>
          <MarkdownBlock>面板安装视频</MarkdownBlock>
        </h2>
        <MarkdownBlock>
          我们为你准备了一个简单的给予面板的安装视频，你可以通过视频了解到在正式环境下，如何安装 Plus 程序
        </MarkdownBlock>
      </div>
    </div>
  </Container>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <InstallVideo />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
