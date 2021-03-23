import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event'
import {render} from '@testing-library/react';
import {AdultValidator} from '../src/AdultValidator';

test('should show TO YOUNG message after entering value smaller than min', () => {
  // given
  const {queryByLabelText, queryByRole} = render(<AdultValidator />);

  // when
  const input = queryByLabelText(/age/i)
  user.type(input, '2');

  // then
  expect(queryByRole('alert')).toHaveTextContent(/are you really so young/i)
});

test('should show TO OLD message after entering value greater than max', () => {
  // given
  const {queryByLabelText, queryByRole} = render(<AdultValidator />);

  // when
  const input = queryByLabelText(/age/i)
  user.type(input, '200');

  // then
  expect(queryByRole('alert')).toHaveTextContent(/are you really so old/i)
});

test('should show ONLY FOR ADULT message after entering value smaller than 18', () => {
  // given
  const {queryByLabelText, queryByRole} = render(<AdultValidator />);

  // when
  const input = queryByLabelText(/age/i)
  user.type(input, '15');

  // then
  expect(queryByRole('alert')).toHaveTextContent(/only for adult/i)
});
