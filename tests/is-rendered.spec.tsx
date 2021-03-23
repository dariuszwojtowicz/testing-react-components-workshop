import * as React from "react";
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
import {render} from '@testing-library/react';
import {AdultValidator} from '../src/AdultValidator';

test('should show GROWN UP message and no VALIDATION message after entering valid value', () => {
  // given
  const {queryByLabelText, queryByRole, queryByText} = render(<AdultValidator />);

  // when
  user.type(queryByLabelText(/age/i), '20');

  const validationMessage = queryByRole('alert');
  const grownUpMessage = queryByText(/you are grown up/i);

  // then
  expect(validationMessage).not.toBeInTheDocument();
  expect(grownUpMessage).toBeInTheDocument();
});
