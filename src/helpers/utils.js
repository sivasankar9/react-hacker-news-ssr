export const updateLocalStorage = (objectID, item) => {
  localStorage.setItem(objectID, JSON.stringify(item))

  return item
}

export const buildGraphData = (hits) =>
  hits.map((item) => ({ name: item.objectID, polls: item.points }))

export const filterNews = (news) => ({
  ...news,
  hits: news.hits.filter(
    (item) => typeof item.isVisible == 'undefined' && !item.isVisible
  ),
})
export const isoToDateFormatConvertor = (isoDate) => {
  const date = new Date(isoDate).toISOString().substring(0, 10);

  return date;
}

export const getHostName = (url) => {
  var hostname;

  if (url == null) return '';


  if (url.indexOf("//") > -1) {
    hostname = url.split('/')[2];
  }
  else {
    hostname = url.split('/')[0];
  }
  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];

  return hostname;
}
