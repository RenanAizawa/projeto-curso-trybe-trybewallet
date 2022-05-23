import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passaword: '',
      disabled: true,
    };
  }

  validateEmail = (email) => email
    .match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  handleLogin = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, passaword } = this.state;
      const rule = 6;
      if ((passaword.length >= rule) && this.validateEmail(email)) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  loginAction = () => {
    const { email } = this.state;
    const { loginAction, history } = this.props;
    loginAction(email);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email-login">
            email:
            {' '}
            <input
              type="email"
              id="email-login"
              data-testid="email-input"
              name="email"
              onChange={ (e) => this.handleLogin(e) }
            />
          </label>
          <label htmlFor="passaword-login">
            passaword:
            {' '}
            <input
              type="password"
              id="passaword-login"
              data-testid="password-input"
              name="passaword"
              onChange={ (e) => this.handleLogin(e) }
            />
          </label>
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => this.loginAction() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginAction: (state) => dispatch(login(state)),
});

Login.propTypes = {
  loginAction: PropTypes.any,
  history: PropTypes.any,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
