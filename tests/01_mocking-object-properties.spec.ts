import {greet} from "../src/greetings";

test('should return correct greeting for given name', () => {
  // given

  // when
  const greeting = greet('Joe');

  // then
  expect(greeting).toEqual('Cześć Joe!');
});
