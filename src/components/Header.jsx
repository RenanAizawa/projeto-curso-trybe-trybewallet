import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div>
          <span data-testid="email-field">
            {userEmail}
          </span>
        </div>
        <div>
          <form>
            alguma coisa
          </form>
        </div>
        <div>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">0</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.any,
}.isRequired;

export default connect(mapStateToProps)(Header);
