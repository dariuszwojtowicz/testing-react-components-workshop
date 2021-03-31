import {createStore} from 'redux';
import {reducer, RootState} from './reducer';

const initialState: RootState = {
  counter: 0
};

export const store = createStore(reducer, initialState);
