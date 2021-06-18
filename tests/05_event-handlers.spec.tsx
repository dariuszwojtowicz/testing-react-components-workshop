import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import {AdultValidator} from '../src/AdultValidator';

test('should show TO YOUNG message after entering value smaller than min', () => {
  // given
  const {queryByRole} = render(<AdultValidator />);

  // when

  // then
  expect(queryByRole('alert')).toHaveTextContent(/are you really so young/i)
});

test('should show TO OLD message after entering value greater than max', () => {
  // given
  const {queryByRole} = render(<AdultValidator />);

  // when

  // then
  expect(queryByRole('alert')).toHaveTextContent(/are you really so old/i)
});

test('should show ONLY FOR ADULT message after entering value smaller than 18', () => {
  // given
  const {queryByRole} = render(<AdultValidator />);

  // when

  // then
  expect(queryByRole('alert')).toHaveTextContent(/only for adult/i)
});
