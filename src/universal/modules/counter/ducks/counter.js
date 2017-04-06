import {fromJS, Map as iMap} from 'immutable';
import {push, replace} from 'react-router-redux';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT  = 'COUNTER_DECREMENT';

const initialState = iMap({
  count: 0
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state.merge({
        count: state.get('count') + 1
      });
    case COUNTER_DECREMENT:
      return state.merge({
        count: state.get('count') - 1
      });
    default:
      return state;
  }
}


export function incrementCount( ) {
  return {
    type: COUNTER_INCREMENT
  };
}

export function decrementCount( ) {
  return {
    type: COUNTER_DECREMENT
  };
}
