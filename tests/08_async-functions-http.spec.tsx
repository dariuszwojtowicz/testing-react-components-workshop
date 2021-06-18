import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event'
import {render, waitFor} from '@testing-library/react';
import {WeatherInfo} from '../src/WeatherInfo';
import {fetchWeather} from '../src/utils/api';
import {mocked} from 'ts-jest';

jest.mock('../src/utils/api');

const fetchWeatherMock = mocked(fetchWeather);

test('should display weather after providing city name', async () => {
  // given
  fetchWeatherMock.mockResolvedValueOnce('sunny');
  const {queryByLabelText, queryByText} = render(<WeatherInfo />);

  // when
  const input = queryByLabelText(/city/i);
  user.type(input, 'london');

  // then
  await waitFor(() => {
    expect(fetchWeatherMock).toHaveBeenCalledWith('london');
    const weatherInfo = queryByText(/weather in london is sunny/i);
    expect(weatherInfo).toBeInTheDocument();
  });
});
