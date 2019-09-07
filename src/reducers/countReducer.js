const countReducer = (currentState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: currentState.count + 1, counterStatus: 'Going Up! 🙌🏻' };
    case 'decrement':
      return { count: currentState.count - 1, counterStatus: 'Going Down! 🙀' };
    default:
      throw new Error();
  }
};

export default countReducer;
