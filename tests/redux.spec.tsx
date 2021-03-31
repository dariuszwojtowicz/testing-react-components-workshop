import * as React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ReduxCounter} from '../src/ReduxCounter';

test('should render counter with default value from store and increment by 1 after plus button click', () => {
  // given
  const { } = render(
    <ReduxCounter />
  );

  // when
  // TODO click plus button

  // then
  // TODO check if counter has value 1
});

test('should render counter with given initial state and decrement by 1 after minus button click', () => {
  // given
  const { } = render(
    <ReduxCounter />
  );

  // when
  // TODO click minus button

  // then
  // TODO check if counter is set to (initial state - 1)
});
