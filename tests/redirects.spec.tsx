import React from 'react';
import {Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {RoutedApp} from '../src/RoutedApp';

test('should RoutedApp component render contact and info and allow user to navigate', () => {
  // given
  const history = createMemoryHistory({initialEntries: ['/info']});
  const {container} = render(
    <Router history={history}>
      <RoutedApp />
    </Router>,
  );
  // TODO check if Info header is displayed
  expect(container.querySelector('h2')).toHaveTextContent(/info/i);

  // when
  // TODO navigate to Contact page

  // then
  // TODO check if Contact header is displayed
});
