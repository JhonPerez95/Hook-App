const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Agregar':
      return [...state, action.payload];

    default:
      return state;
  }
};

const todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
};

const action = {
  type: 'Agregar',
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
