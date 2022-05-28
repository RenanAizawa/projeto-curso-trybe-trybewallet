import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  expenses = () => {
    const { somaDasDespesas } = this.props;
    if (somaDasDespesas) {
      const novoObj = somaDasDespesas.map((valores) => ({
        valor: Number(valores.value),
        troca: Number(valores.exchangeRates[valores.currency].ask),
      }));
      const somaTotal = novoObj.reduce((total, despesa) => {
        const soma = despesa.valor * despesa.troca;
        return total + soma;
      }, 0);
      return somaTotal.toFixed(2);
    }
    return 0;
  }

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
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">{this.expenses()}</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  somaDasDespesas: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.any,
  somaDasDespesas: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
