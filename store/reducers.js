const { combineReducers } = require("redux");

function todo(state = {}, { type, payload }) {
  // console.log(state, type, payload);

  if (type === "todo") {
    return {
      ...state,
      // ...state.todo,
      ...payload
    };
  } else {
  }
  return state;
}

function hello(state = {}, { type, payload }) {
  if (type === "hello") {
    return {
      ...state,
      // ...state.hello,
      ...payload
    };
  }

  return state;
}

function nullState(state = {}, { type, payload }) {
  if (type === "nullState") {
    console.log("nullState/payload", payload, state);

    return {
      ...state,
      ...payload
    };
  }

  return state;
}

function abc(state = {}, action) {
  return state;
}
module.exports = combineReducers({
  todo,
  hello,
  nullState,
  abc
});
