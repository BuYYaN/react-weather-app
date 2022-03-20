const getTotalNumberOfQueries = (arr) => {
  let total = 0;
  arr.forEach((data) => (total += data.totalQueries));
  return total;
};

const getMostSearchedQuery = (arr) => {
  const mostSearchQuery = arr.reduce((d1, d2) => {
    if (d1.totalQueries > d2.totalQueries) return d1;
    else return d2;
  }, -Infinity);
  return mostSearchQuery.name;
};

const getTempData = (arr) => {
  const temp = {
    min: Infinity,
    max: -Infinity,
    avg: 0,
  };

  arr.forEach((data) => {
    if (data.temp > temp.max) temp.max = data.temp;
    if (data.temp < temp.min) temp.min = data.temp;
    temp.avg += data.temp;
  });

  temp.avg /= arr.length;
  return temp;
};

const getSimplifiedStats = (dataArr) => ({
  totalQueries: getTotalNumberOfQueries(dataArr),
  mostSearchedQuery: getMostSearchedQuery(dataArr),
  temperatureData: getTempData(dataArr),
  weatherHistory: dataArr,
});

export default getSimplifiedStats;
