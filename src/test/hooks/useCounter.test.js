import useCounter from '../../hook/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';

describe('Pruebas en useCounter ', () => {
  const value = 100;
  test('Debe retornar valores del hook', () => {
    const { result } = renderHook(() => useCounter());
    // console.log(result.current);

    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.resertState).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
  });

  test('Debe retornar el counter el valor de la constante', () => {
    const { result } = renderHook(() => useCounter(value));
    expect(result.current.counter).toBe(value);
  });

  test('Debe incrementar en 1 el counter', () => {
    const { result } = renderHook(() => useCounter(value));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(value + 1);
  });

  test('Debe decrementar en 1 el counter  ', () => {
    const { result } = renderHook(() => useCounter(value));
    const { decrement } = result.current;

    act(() => decrement());

    const { counter } = result.current;
    expect(counter).toBe(value - 1);
  });

  test('Debe resetear  el counter y arrojar el valor de value ', () => {
    const { result } = renderHook(() => useCounter(value));
    const { resertState } = result.current;

    act(() => resertState());
    const { counter } = result.current;
    expect(counter).toBe(value);
  });
});
