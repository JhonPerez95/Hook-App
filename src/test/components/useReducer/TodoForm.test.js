import React from 'react';
import { demoTodos } from './demoTodos';
import { shallow } from 'enzyme';
import TodoForm from '../../../components/useReducer/TodoForm';

describe('Pruebas al component <TodoForm/>', () => {
  const addTodo = jest.fn();
  const wrapper = shallow(<TodoForm addTodo={addTodo} />);

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe llamar addToDo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(addTodo).toHaveBeenCalledTimes(0);
  });

  test('Debe llamar la funcion  addTodo con un argumento', () => {
    const value = 'Learn Git';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(addTodo).toHaveBeenCalled();
    expect(addTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false,
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
