import * as React from 'react';
import user from '@testing-library/user-event';
import {render} from '@testing-library/react';
import {createStore} from 'redux';
import '@testing-library/jest-dom/extend-expect';
import {Provider} from 'react-redux';
import {ReduxCounter} from '../src/ReduxCounter';

test('should render counter with default value from store', () => {
  // given
  const { } = render(
    <ReduxCounter />
  );

  // when
  // TODO click plus button

  // then
  // TODO check if counter has value 1
});

test('should render counter with given initial state', () => {
  // given
  const { } = render(
    <ReduxCounter />
  );

  // when
  // TODO click minus button

  // then
  // TODO check if counter is set to (initial state - 1)
});
