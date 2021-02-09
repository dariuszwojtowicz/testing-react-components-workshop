import {renderHook} from '@testing-library/react-hooks';
import {useCounter} from '../src/utils/useCounter';

test('should provide counter with inc and dec operators for default configuration', () => {
  // given
  const { result } = renderHook(useCounter);

  // when
  // TODO counter value should be 0
  // TODO something should happen here

  // then
  // TODO counter value should be 1
  // TODO something should happen here
  // TODO counter value should be 0
});

test('should provide counter with inc and dec operators for custom configuration', () => {
  // TODO test with passed initialValue and step
});
