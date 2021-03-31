import * as React from 'react';
import user from '@testing-library/user-event';
import {render} from '@testing-library/react';
import {createStore} from 'redux';
import '@testing-library/jest-dom/extend-expect';
import {Provider} from 'react-redux';
import {ReduxCounter} from '../src/ReduxCounter';
import {store} from '../src/redux/store';
import {reducer} from '../src/redux/reducer';

test('should render counter with default value from store', () => {
  // given
  const { queryByLabelText, queryByText } = render(
    <Provider store={store}>
      <ReduxCounter />
    </Provider>,
  );

  // when
  const plusButton = queryByText('+');
  user.click(plusButton);

  // then
  const counter = queryByLabelText(/counter value/i);
  expect(counter).toHaveValue('1');
});

test('should render counter with given initial state', () => {
  // given
  const customStore = createStore(reducer, { counter: 100 });
  const { queryByLabelText, queryByText } = render(
    <Provider store={customStore}>
      <ReduxCounter />
    </Provider>,
  );

  // when
  const minusButton = queryByText('-');
  user.click(minusButton);

  // then
  const counter = queryByLabelText(/counter value/i);
  expect(counter).toHaveValue('99');
});
