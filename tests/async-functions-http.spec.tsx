import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event'
import {render, waitFor} from '@testing-library/react';
import {WeatherInfo} from '../src/WeatherInfo';

test('should display weather after providing city name', () => {
  // given
  const {queryByLabelText, queryByText} = render(<WeatherInfo />);

  // when
  const input = queryByLabelText(/city/i);

  // then
  // TODO fetchWeather was called with provided city name
  // TODO weather for provided city name is displayed
});
