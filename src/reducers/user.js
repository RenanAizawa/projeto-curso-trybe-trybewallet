const INITIAL_USER = {

  email: '',

};

const user = (state = INITIAL_USER, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      email: action.state,
    };
  default:
    return state;
  }
};

export default user;
