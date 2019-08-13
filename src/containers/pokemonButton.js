import React, { Component } from 'react';
import { connect } from 'react-redux';
import getPokemonActionCreator from '../actions/getPokemonActionCreator';

class PokemonButton extends Component {
  render() {
    return (
      <button onClick={this.props.getPokemonActionCreator}>
        Get that Pokemon
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPokemonActionCreator: () => {
    dispatch(getPokemonActionCreator());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonButton);
