import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as help from './helper';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      method: '',
      tag: '',
      description: '',
      currency: '',
    };
  }

  handleForm = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  payout = () => (
    help.pagamento.map((pay, ind) => (
      <option key={ ind } name="method" value={ pay }>
        {pay}
      </option>
    ))
  )

  category = () => (
    help.categorias.map((tag, ind) => (
      <option key={ ind } name="tag" value={ tag }>
        {tag}
      </option>
    ))
  )

  coins = () => {
    const { moedas } = this.props;
    if (moedas) {
      return (
        moedas.map((coin, ind) => (
          <option key={ ind } name="currency" value={ coin }>
            {coin}
          </option>
        ))
      );
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" data-testid="value-input" />
          </label>
          <label htmlFor="coins">
            Moeda:
            <select
              id="coins"
              name="currency"
              onChange={ (e) => this.handleForm(e) }
            >
              {this.coins()}
            </select>
          </label>
          <label htmlFor="payout">
            Método de Pagamento:
            <select
              id="payout"
              name="method"
              onChange={ (e) => this.handleForm(e) }
              data-testid="method-input"
            >
              {this.payout()}
            </select>
          </label>
          <label htmlFor="category">
            Categoria:
            <select
              id="category"
              name="tag"
              onChange={ (e) => this.handleForm(e) }
              data-testid="tag-input"
            >
              {this.category()}
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              id="description"
              name="description"
              onChange={ (e) => this.handleForm(e) }
              data-testid="description-input"
            />
          </label>
          <button type="button">
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

Form.propTypes = {
  moedas: PropTypes.array,
}.isReuired;

export default connect(mapStateToProps)(Form);
