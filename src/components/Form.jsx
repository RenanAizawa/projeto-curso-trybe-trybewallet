import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as help from './helper';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      method: '',
      tag: '',
      description: '',
      currency: '',
      id: 0,
      value: '',
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

  saveDispesa = async () => {
    const { method, tag, currency, description, id, value } = this.state;
    const { addDespesa } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const novaDespesa = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: data,
    };
    addDespesa(novaDespesa);
    this.setState((prevS) => ({
      id: prevS.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input
              type="number"
              id="valor"
              data-testid="value-input"
              name="value"
              value={ value }
              onChange={ (e) => this.handleForm(e) }
            />
          </label>
          <label htmlFor="coins">
            Moeda:
            <select
              id="coins"
              name="currency"
              value={ currency }
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
              value={ method }
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
              value={ tag }
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
              value={ description }
              onChange={ (e) => this.handleForm(e) }
              data-testid="description-input"
            />
          </label>
          <button
            type="button"
            onClick={ () => this.saveDispesa() }
          >
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

const mapDispatchToProps = (dispatch) => ({
  addDespesa: (state) => dispatch(actions.addNewDespesa(state)),
});

Form.propTypes = {
  moedas: PropTypes.array,
}.isReuired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
