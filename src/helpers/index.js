import { PATH_PARAMS, PATHS } from '../constants';

export default function encodeQueryData(data) {
  const ret = [];
  Object.keys(data).forEach((paramName) => {
    if (data[paramName] !== null && data[paramName] !== '' && typeof data[paramName] !== 'undefined') {
      ret.push(`${encodeURIComponent(paramName)}=${encodeURIComponent(data[paramName])}`);
    }
  });
  return ret.join('&');
}

export function goSearch(search, history) {
  const historyPushData = {
    pathname: PATHS.catalog,
  };

  if (search) {
    historyPushData.search = `?${PATH_PARAMS.catalog.search}=${search}`;
  }

  history.push(historyPushData);
}
