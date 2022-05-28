import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Form from '../components/Form';
import Header from '../components/Header';
import TabelaDeControle from '../components/TabelaDeControle';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  render() {
    return (
      <div className="main-body">
        <Header />
        <Form />
        <hr />
        <TabelaDeControle />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCoin: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(actions.fetchCurrency()),
});

export default connect(null, mapDispatchToProps)(Wallet);
