import random from '../src/utils/random';
import {greet, greet2} from '../src/greetings';

jest.mock('../src/utils/config', () => ({
  lang: 'pl'
}));

jest.mock('../src/utils/random', () => ({
  getRandomListElement: jest.fn(() => 'Hello')
}));

describe('greetings', () => {

  test('should return correct greeting for given name', () => {
    // when
    const greeting = greet('Joe');

    // then
    expect(greeting).toEqual('Cześć Joe!');
  });

  test('should return correct greeting for given name', () => {
    // when
    const greeting = greet2('Joe');

    // then
    expect(greeting).toEqual('Hello Joe!');
    expect(random.getRandomListElement).toBeCalledTimes(1);
    expect(random.getRandomListElement).toBeCalledWith('Hi', 'Hello', 'Whats up');
  });
});
