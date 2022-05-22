const INITIAL_USER = {
  user: {
    email: '',
  },
};

const myUser = (state = INITIAL_USER, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      user: {
        email: action.email,
      },
    };
  default:
    return state;
  }
};

export default myUser;
