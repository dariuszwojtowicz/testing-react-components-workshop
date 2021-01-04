import config from './utils/config';

export const greet = (name: string) => {
  const greeting = config.lang === 'pl' ? 'Cześć' : 'Hello';
  return `${greeting} ${name}!`;
}
