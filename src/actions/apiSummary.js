import request from '../utils/request';

export const NAME = 'API/SUMMARY';
export const SET = 'API/SUMMARY/SET';

export const setSummary = summary => ({ type: SET, summary });

const includeSummary = (path, call) => {
  request.get(path).then(({ data: summary }) => call(summary)).catch(() => call([]));
};

const includes = (summary, paths = []) => {
  summary = summary.map((item, key) => {

    if (item.include) {
      paths.push(item.include);
      
      return { ...item, items: [] };
    }

    if (item.items) {
      paths = includes(item.items, paths).paths;
    }

    return item;
  });

  return { summary, paths };
};

const addIncludePrefix = (prefix, summay) => summay.map((item) => {
  if (item.items) {
    item.items = addIncludePrefix(prefix, item.items);

    return item;
  }

  item.markdown = prefix + item.markdown;

  return item;
});

const repInclude = (summary, include, itemSummary) => {
  return summary.map(item => {

    const { name, path } = item;
    const { basename, markdown, summary = [] } = itemSummary;

    if (markdown && item.include === include) {
      return { name, path, markdown: basename + markdown };
    }

    if (item.include === include) {
      return { name, path, items: addIncludePrefix(basename, summary) };
    }

    if (item.items) {
      item.items = repInclude(item.items, include, itemSummary);
    }

    return item;
  });
};

const fetchInclude = (paths, summary, dispatch) => {
  paths.forEach(path => includeSummary(path, itemSummary => {
    dispatch(setSummary(
      summary = repInclude(summary, path, itemSummary)
    ));
  }));
};

export default () => dispatch => request.get(
  `/docs/v2/summary.json`
).then(({ data }) => {

  const { summary, paths } = includes(data);

  dispatch(
    setSummary(summary)
  );

  fetchInclude(paths, summary, dispatch);
});
