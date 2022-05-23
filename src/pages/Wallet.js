import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header />
        aplicativo em construção
      </div>
    );
  }
}

Wallet.propTypes = {}.isRequired;

export default connect()(Wallet);
