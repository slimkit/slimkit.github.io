const React = require('react');

const siteConfig = require(process.cwd() + '/siteConfig.js');

function jsUrl(js) {
  return siteConfig.baseUrl + 'js/' + js;
}

class NewIssue extends React.Component {
  render() {
    return (
      <div className="container">
        <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <form className="pt-4 pb-4" id="new-issue">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="repo">相关库</label>
              <select id="repo" className="form-control" required defaultValue="plus">
                <option value="plus">ThinkSNS Plus</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="type">这是一个</label>
              <select id="type" className="form-control" required defaultValue="bug">
                <option value="bug">错误报告</option>
              </select>
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="title">Issue 标题</label>
              <input type="text" className="form-control" id="title" required/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="version">版本</label>
              <input type="text" className="form-control" id="version" aria-describedby="version-help" placeholder="请输入 X.Y.Z 格式版本号" required/>
              <small id="version-help" className="form-text text-muted">请检查是否在新的版本中已修复</small>
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="step">重现步骤</label>
              <textarea className="form-control" aria-describedby="step-help" id="step" rows="3" required></textarea>
              <small id="step-help" className="form-text text-muted">如何才能重现这个 Bug ？清晰明了的描述重现，可以让我们更加快速准确的定位问题。支持使用 Markdown 来格式化你的描述。</small>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="desired" required>期望的结果是什么？</label>
              <textarea className="form-control" id="desired" rows="3"></textarea>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="reality" required>实际结果是什么？</label>
              <textarea className="form-control" id="reality" rows="3"></textarea>
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="more">补充说明（可选）</label>
              <textarea className="form-control" aria-describedby="more-help" id="more" rows="3"></textarea>
              <small id="more-help" className="form-text text-muted">如果你有更多的补充请写在这里，例如你的业务场景、PHP 版本，数据库版本等信息。</small>
            </div>

          </div>

          <button type="submit" className="btn btn-primary">提交</button>
        </form>
        <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js" />
        <script src="https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js" />
        <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js" />
        <script src={jsUrl('new-issue.js')} />
      </div>
    );
  }
}

module.exports = NewIssue;
