const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'DELETE_TODO':
      return state.filter((item) => item.id !== action.payload);

    case 'TOGGLE_TODO-OLD':
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      });

    case 'TOGGLE_TODO':
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );

    default:
      return state;
  }
};

export default todoReducer;
