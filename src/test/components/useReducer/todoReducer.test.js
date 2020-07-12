import todoReducer from '../../../components/useReducer/todoReducer';
import { demoTodos } from './demoTodos';

describe('Pruebas al reducer ToDo', () => {
  test('Debe retonar un state por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('Debe ADD nuevo ToDo ', () => {
    const newToDo = {
      id: 3,
      description: 'Learn AWS',
      done: false,
    };
    const action = {
      type: 'ADD_TODO',
      payload: newToDo,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newToDo]);
  });

  test('Debe eliminar un ToDo', () => {
    const action = {
      type: 'DELETE_TODO',
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    console.log(state);
    // expect(state.length).toBe(2);
  });

  test('Debe hacer el toggle del ToDo', () => {
    const action = {
      type: 'TOGGLE_TODO',
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    expect(state[0].done).toEqual(true);
  });
});
