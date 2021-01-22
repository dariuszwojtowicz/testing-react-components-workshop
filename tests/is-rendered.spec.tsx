import * as React from "react";
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
import {render} from '@testing-library/react';
import {AdultValidator} from '../src/AdultValidator';

test('should show GROWN UP message and no VALIDATION message after entering valid value', () => {
  // given
  const {queryByLabelText} = render(<AdultValidator />);

  // when
  user.type(queryByLabelText(/age/i), '20');

  // then
  expect(true).toBeFalsy();
  // TODO validationMessage is not render
  // TODO grownUpMessage is rendered
});
