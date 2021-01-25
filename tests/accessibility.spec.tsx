import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import {axe} from 'jest-axe';
import {render} from '@testing-library/react';

const Form = () => (
  <form>
    <label htmlFor="email">Email</label>
    <input id="email" placeholder="email" />
    <label htmlFor="email">Confirm Email</label>
    <input id="email" placeholder="confirm email" />
  </form>
);

test('form is accessible', async () => {
  // given
  const {container} = render(<Form />);

  // when
  const result = await axe(container);

  // then
  expect(result).toHaveNoViolations();
});
