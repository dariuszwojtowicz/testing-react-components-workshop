import * as React from 'react';
import user from '@testing-library/user-event';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Provider} from 'react-redux';
import {ReduxCounter} from '../src/ReduxCounter';
import {store} from '../src/redux/store';

test('should display last operation info', () => {
  // given
  const {queryByText} = render(
    <Provider store={store}>
      <ReduxCounter />
    </Provider>,
  );

  // when

  // then
  expect(queryByText(/last operation: increment/i)).toBeInTheDocument();

  // when

  // then
  expect(queryByText(/last operation: decrement/i)).toBeInTheDocument();
});

