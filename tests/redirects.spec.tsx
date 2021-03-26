import React from 'react';
import {Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';
import user from '@testing-library/user-event';
import {render} from '@testing-library/react';
import {RoutedApp} from '../src/RoutedApp';

test('should RoutedApp component render contact and info and allow user to navigate', () => {
  // given
  const history = createMemoryHistory({initialEntries: ['/info']});
  const {queryByRole, queryByText} = render(
    <Router history={history}>
      <RoutedApp />
    </Router>,
  );
  const initialHeading = queryByRole('heading');
  expect(initialHeading).toHaveTextContent(/info/i);

  // when
  const contactMenuItem = queryByText(/contact/i);
  user.click(contactMenuItem);

  // then
  const afterRedirectHeading = queryByRole('heading');
  expect(afterRedirectHeading).toHaveTextContent(/contact/i);
});
