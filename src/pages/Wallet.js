import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  render() {
    return (
      <div className="main-body">
        <Header />
        aplicativo em construção
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
