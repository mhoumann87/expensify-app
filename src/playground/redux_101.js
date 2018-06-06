import {createStore} from "redux";

// Action generators - functions that return action abjects

const incrementCount = ({incrementBy = 1} = {})  => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const countReset = () => ({
  type: "RESET"
});

const countSet = ({count}) => ({
  type: "SET",
  count
});

const countReducer = ((state = {count: 0}, action) => {
  switch (action.type) {
    case "INCREMENT":
    return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(countReset());

store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(decrementCount());

store.dispatch(countSet({count: 101}));