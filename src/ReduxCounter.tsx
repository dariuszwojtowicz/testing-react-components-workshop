import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from './redux/reducer';

export const ReduxCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const inc = () => dispatch({ type: 'INC' });
  const dec = () => dispatch({ type: 'DEC' });
  return (
    <>
      <h1>Redux Counter</h1>
      <button onClick={dec}>-</button>
      <label htmlFor="counter">Counter value:</label>
      <input id="counter" disabled value={counter} />
      <button onClick={inc}>+</button>
    </>
  )
};
