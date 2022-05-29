import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class TabelaDeControle extends React.Component {
  listaDasDespesas = () => {
    const { lista } = this.props;
    if (lista.length > 0) {
      const desconstruçao = lista.map((desp) => ({
        id: desp.id,
        descrição: desp.description,
        tag: desp.tag,
        metodoPag: desp.method,
        cifrao: desp.currency,
        valor: Number(desp.value).toFixed(2),
        moeda: desp.currency,
        cambioUtil: desp.exchangeRates[desp.currency].name,
        valorCombio: Number(desp.exchangeRates[desp.currency].ask).toFixed(2),
        valorConv: (Number(desp
          .exchangeRates[desp.currency].ask) * Number(desp.value)).toFixed(2),
        MoedaConv: 'Real',
      }));
      return desconstruçao.map((desp) => (
        <tr key={ desp.id }>
          <td>{desp.descrição}</td>
          <td>{desp.tag}</td>
          <td>{desp.metodoPag}</td>
          <td>
            {/* {desp.cifrao} */}
            {desp.valor}
          </td>
          <td>{desp.moeda}</td>
          <td>{desp.cambioUtil}</td>
          <td>{desp.valorCombio}</td>
          <td>{desp.valorConv}</td>
          <td>{desp.MoedaConv}</td>
          <td>
            <button type="button">Excluir</button>
            <button type="button">Editar</button>
          </td>
        </tr>
      ));
    }
    return <h1>lista não criada</h1>;
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {this.listaDasDespesas()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  lista: state.wallet.expenses,
});

TabelaDeControle.propTypes = {
  lista: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(TabelaDeControle);
