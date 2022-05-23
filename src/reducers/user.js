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
        ...action.state,
      },
    };
  default:
    return state;
  }
};

export default myUser;
