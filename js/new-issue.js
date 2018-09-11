;var issueTemplate = '\
## 基本信息\n\n\
<!-- 请正确输入你的版本信息，以便我们针对性的检查 -->\n\
版本：`{version}`\n\n\
## 重现步骤\n\n\
{step}\n\n\
## 期望的结果是什么？\n\n\
{desired}\n\n\
## 实际结果是什么？\n\n\
{reality}\n\n\
## 补充说明（可选）\n\n\
{more}\n\
PHP 版本：\n\
数据库类型：\n\
数据库版本：\n\
\n\n\
<!-- Love thinksns-plus? Please consider supporting our collective:\n\
👉  https://opencollective.com/thinksns-plus/donate -->\
';

(function($) {
  $('form#new-issue').submit(function(event) {
    event.preventDefault();
    
    var type = $('#type').val();
    var title = $('#title').val();
    var version = $('#version').val();
    var step = $('#step').val();
    var desired = $('#desired').val();
    var reality = $('#reality').val();
    var more = $('#more').val();
    var issueTitle = '{type: {type}, version: {version}}: {title}'
      .replace('{type}', type)
      .replace('{version}', version)
      .replace('{title}', title);
    var issueBody = issueTemplate
      .replace('{version}', version)
      .replace('{step}', step)
      .replace('{desired}', desired)
      .replace('{reality}', reality)
      .replace('{more}', more);
    var newIssueAction = 'https://github.com/slimkit/thinksns-plus/issues/new?title={title}&body={body}'
      .replace('{title}', encodeURIComponent(issueTitle))
      .replace('{body}', encodeURIComponent(issueBody));

    window.open(newIssueAction);
  });
})($ || window.$ || window.jQuery);
