import {useState} from 'react';

export const useCounter = ({ initialValue = 0, step = 1} = {}) => {
  const [counter, setCounter] = useState(initialValue);
  const inc = () => setCounter(c => c + step);
  const dec = () => setCounter(c => c - step);
  return { counter, inc, dec };
};
