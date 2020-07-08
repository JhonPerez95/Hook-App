const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'DELETE_TODO':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;
