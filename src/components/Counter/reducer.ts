const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  console.log('Count reducer', action);
  const { type } = action;

  switch (type) {
    case 'ADD_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default counter;
