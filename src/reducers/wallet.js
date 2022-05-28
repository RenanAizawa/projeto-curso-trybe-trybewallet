const INITIAL_USER = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_USER, action) => {
  switch (action.type) {
  case 'GET_CURRENCY':
    return {
      ...state,
      currencies: action.state,
    };
  default:
    return state;
  }
};

export default wallet;
