const { renderHook, act } = require('@testing-library/react-hooks');
const { default: useForm } = require('../../hook/useForm');

describe('Pruenas al hook useForm', () => {
  const initialForm = {
    id: 123,
    name: 'Jhon',
    email: 'jhon@gmail.com',
  };

  test('debe retornar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result.current);
    const [formValue, handleInputChange, resetInput] = result.current;
    expect(formValue).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof resetInput).toBe('function');
  });

  test(' debe cambiar el valor del  formulario (cambiar name )', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    const event = {
      target: {
        name: 'name',
        value: 'Jainer',
      },
    };
    act(() => handleInputChange(event));
    const [formValue] = result.current;
    expect(formValue).toEqual({
      ...initialForm,
      name: event.target.value,
    });
  });

  test('Debe resetear el Formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, , resetInput] = result.current;

    act(() => resetInput());

    const [formValue] = result.current;
    expect(formValue).toEqual(initialForm);
  });
});
