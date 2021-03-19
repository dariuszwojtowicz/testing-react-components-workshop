import random from '../src/utils/random';
import {greet2} from '../src/greetings';

test('should return correct greeting for given name', () => {
  // given

  // when
  const greeting = greet2('Joe');

  // then
  expect(greeting).toEqual('Hi Joe!');
  expect(random.getRandomListElement).toBeCalledTimes(1);
  expect(random.getRandomListElement).toBeCalledWith('Hi', 'Hello', 'Whats up');
});
