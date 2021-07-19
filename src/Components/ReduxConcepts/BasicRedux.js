import React, { Component } from "react";
import { createStore } from "redux";
const reducer = (state=initialState, action) => {
  let books = [...state];
  switch (action.type) {
    case "ADD_BOOK":
      books.push(action.payload);
      return books;
      break;
    case "DELETE_BOOK":
      for (let i = 0; i < books.length; i++) {
        if (books[i].id == action.payload.id) {
          books.splice(i, 1);
        }
      }
      return books;
      break
    case "UPDATE_BOOK":
      for (let i = 0; i < books.length; i++) {
        if (books[i].id == action.payload.id) {
          books[i] = {...books[i],name:action.payload.name,title:action.payload.title}
        }
      }
      return books;
      break;
  }
  return state;
};
const initialState = [];
const store = createStore(reducer,initialState);
store.subscribe(() => {
  console.log("current state: ", store.getState());
});

store.dispatch({
  type: "ADD_BOOK",
  payload: {
    id: 1,
    name: "vara",
    title: "vara book1",
  },
});
store.dispatch({
  type: "ADD_BOOK",
  payload: {
    id: 2,
    name: "bindu",
    title: "bindu book2",
  },
});
store.dispatch({
  type: "DELETE_BOOK",
  payload: {
    id: 1
  },
});
store.dispatch({
  type: "UPDATE_BOOK",
  payload: {
    id: 2,
    name: "jyothi",
    title: "jyothi book2",
  },
});

class App extends Component {
  render() {
    return <div>Hi</div>;
  }
}

export default App;

