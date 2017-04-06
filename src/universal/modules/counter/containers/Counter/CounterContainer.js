// Libraries
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Components
import Counter from 'universal/modules/counter/components/Counter/Counter.js';

// Actions
import {
  incrementCount,
  decrementCount
} from 'universal/modules/counter/ducks/counter.js';


@connect(mapStateToProps, mapDispatchToProps)
class CounterContainer extends Component {
  static propTypes = {
    // State
    count: PropTypes.number.isRequired,

    // Dispatchers
    incrementCount: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired
  }

  render () {
    return (<Counter {...this.props} />);
  }
}


function mapStateToProps(state, props) {
  const count = state.counter.get('count');
  return {
    count
  };
}


function mapDispatchToProps(dispatch, props) {
  return {
    incrementCount: () => {
      dispatch(incrementCount());
    },
    decrementCount: () => {
      dispatch(decrementCount());
    }
  };
}

export default CounterContainer;
