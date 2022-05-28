import React from 'react';
import { connect } from 'react-redux';

class TabelaDeControle extends React.Component {
  render() {
    return (<h1>Componente Tabela</h1>);
  }
}

export default connect()(TabelaDeControle);
