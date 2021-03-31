export interface RootState {
  counter: number;
}

export const reducer = (state: RootState, action) => {
  switch (action.type) {
    case 'INC':
      return { counter: state.counter + 1 };
    case 'DEC':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
