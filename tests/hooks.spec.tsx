import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../src/utils/useCounter';

test('should provide counter with inc and dec operators for default configuration', () => {
  // given
  const { result } = renderHook(useCounter);

  // when
  expect(result.current.counter).toBe(0);
  act(() => result.current.inc());

  // then
  expect(result.current.counter).toBe(1);
  act(() => result.current.dec());
  expect(result.current.counter).toBe(0);
});

test('should provide counter with inc and dec operators for custom configuration', () => {
  // given
  const { result } = renderHook(useCounter, { initialProps: { initialValue: 100, step: 10 } });

  // when
  expect(result.current.counter).toBe(100);
  act(() => result.current.inc());

  // then
  expect(result.current.counter).toBe(110);
  act(() => result.current.dec());
  act(() => result.current.dec());
  expect(result.current.counter).toBe(90);
});
