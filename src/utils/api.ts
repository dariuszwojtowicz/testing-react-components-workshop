const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  });

export const fetchWeather = async (city: string) => {
  await sleep(1000);
  return Promise.resolve(weather[city] || 'unknown');
};

const weather = {
  london: 'sunny',
  paris: 'windy',
  poznan: 'rainy',
  warsaw: 'sunny'
};
