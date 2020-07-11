const { useFetch } = require('../../hook/useFetch');
const { renderHook } = require('@testing-library/react-hooks');

describe('test al hook useFetch', () => {
  const url = `https://www.breakingbadapi.com/api/quotes/1`;

  test('debe retornar informacion por defecto ', () => {
    const { result } = renderHook(() => useFetch(url));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Debe traer info deseada', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('Debe manejar el error ', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apid/users?page=2`)
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe('No se pudo cargar la info');
  });
});
