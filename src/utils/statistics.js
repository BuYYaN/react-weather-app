//min max avg
//most szukane haslo

import Weather from "../agent";

const getTotalNumberOfQueries = async () => {
  let total = 0;
  const arr = await Weather.history(Infinity);
  arr.forEach((data) => (total += data.totalQueries));
  return total;
};

const getMostSearchedQuery = async () => {
  const arr = await Weather.history(Infinity);
  const mostSearchQuery = arr.reduce((d1, d2) => {
    if (d1.totalQueries > d2.totalQueries) return d1;
    else return d2;
  }, -Infinity);
  return mostSearchQuery.name;
};

const getTempData = async () => {
  const arr = await Weather.history(Infinity);
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

export { getTotalNumberOfQueries, getMostSearchedQuery, getTempData };
