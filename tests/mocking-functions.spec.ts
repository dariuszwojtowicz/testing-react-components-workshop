import random from '../src/utils/random';
import {greet2} from '../src/greetings';

test('should return correct greeting for given name', () => {
  // given
  const originalImplementation = random.getRandomListElement;
  random.getRandomListElement = jest.fn(() => 'Hi');

  // when
  const greeting = greet2('Joe');

  // then
  expect(greeting).toEqual('Hi Joe!');
  expect(random.getRandomListElement).toBeCalledTimes(1);
  expect(random.getRandomListElement).toBeCalledWith('Hi', 'Hello', 'Whats up');
  random.getRandomListElement = originalImplementation;
});

test('should return correct greeting for given name with spyOn', () => {
  // given
  const mocked = jest.spyOn(random, 'getRandomListElement');
  mocked.mockImplementation(() => 'Hello');

  // when
  const greeting = greet2('Joe');

  // then
  expect(greeting).toEqual('Hello Joe!');
  expect(random.getRandomListElement).toBeCalledTimes(1);
  expect(random.getRandomListElement).toBeCalledWith('Hi', 'Hello', 'Whats up');
  mocked.mockRestore();
});
