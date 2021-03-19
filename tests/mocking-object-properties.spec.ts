import {greet} from "../src/greetings";
import config from "../src/utils/config";

test('should return correct greeting for given name', () => {
  // given
  const originalLang = config.lang;
  config.lang = 'pl';

  // when
  const greeting = greet('Joe');

  // then
  expect(greeting).toEqual('Cześć Joe!');
  config.lang = originalLang;
});
