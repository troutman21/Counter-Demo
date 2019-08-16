import React, { Component } from 'react';
import { connect } from 'react-redux';
import getPokemonActionCreator from '../actions/getPokemonActionCreator';

class PokemonButton extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.getPokemonActionCreator(this.props.counter);
        }}
      >
        Get that Pokemon
      </button>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = dispatch => ({
  getPokemonActionCreator: num => {
    dispatch(getPokemonActionCreator(num));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonButton);
