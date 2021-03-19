import config from './utils/config';
import random from './utils/random';

export const greet = (name: string) => {
  const greeting = config.lang === 'pl' ? 'Cześć' : 'Hello';
  return `${greeting} ${name}!`;
}

export const greet2 = (name: string) => {
  const greeting = random.getRandomListElement('Hi', 'Hello', 'Whats up');
  return `${greeting} ${name}!`;
}

