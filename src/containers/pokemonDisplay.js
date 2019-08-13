import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonDisplay extends Component {
  render() {
    return this.props.pokemon ? (
      <img src={this.props.pokemon} alt="current Pokemon" />
    ) : null;
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon.pokemon,
});

export default connect(mapStateToProps)(PokemonDisplay);
