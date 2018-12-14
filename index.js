// process.env.NODE_ENV = "production";
const { createStore } = require("redux");

const reducers = require("./store/reducers");

const initState = {
  nullState: {
    nullStore: "null is an object"
  },
  todo: { todoMap: {} },
  hello: {
    helloList: []
  },
  initStateWithoutReducer: {
    12222: 12222
  }
};
const store = createStore(reducers, initState);

store.subscribe(() => {
  console.log("\n\n");

  console.log("subscribe", store.getState());

  console.log("\n\n");
});


// global

// store.dispatch({
//   type: "hello",
//   payload: {
//     // ...store.getState()
//     abc: 1234
//   }
// });
// store.dispatch({
//   type: "todo",
//   payload: {
//     // ...store.getState()
//     // abc: 1234
//     list: [1, 2, 2, 2, 2, 2, 2, 2]
//   }
// });
//
//
// store.dispatch({
//   type: "nullState",
//   payload: {
//     nullStore: "oh! noooooooooo!"
//   }
// });
// store.dispatch({
//   type: "abc",
//   payload: {
//     nullStore: "oh! yeah!!"
//   }
// });

// console.log(store.getState());

//reducer  =>  state handler

//dispatch =>  action emitter

//subscribe => state change receiver

//store.getState => fetch state from store

//every state has its reducer

// console.log(createStore);
