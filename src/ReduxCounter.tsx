import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './redux/reducer';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const ReduxCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const [info, setInfo] = useState('');
  const inc = () => dispatch({ type: 'INC' });
  const dec = () => dispatch({ type: 'DEC' });

  const prevCounter: number = usePrevious(counter);

  useEffect(() => {
    if (typeof prevCounter !== 'undefined') {
      if (counter > prevCounter) {
        setInfo('Increment');
      } else {
        if (counter < prevCounter) {
            setInfo('Decrement');
          }
      }
    }
  }, [counter, prevCounter]);

  return (
    <>
      <h1>Redux Counter</h1>
      {info && <h2>Last operation: {info}</h2>}
      <button onClick={dec}>-</button>
      <label htmlFor="counter">Counter value:</label>
      <input id="counter" disabled value={counter} />
      <button onClick={inc}>+</button>
    </>
  )
};
