import React, { Component } from "react";
import logger from 'redux-logger';
import { createStore,applyMiddleware} from "redux";
import { addBook,deleteBook } from "./Actions/BookAction";
import { decrementCount, incrementCount } from "./Actions/CountAction";
import reducers from "./Reducers";

const middleware = applyMiddleware(logger)    
const store = createStore(reducers,middleware);

// store.subscribe(() => {
//   console.log("current state is ", store.getState());
// });
// store.dispatch(addBook("bindu"));
// store.dispatch(addBook("jyothi"));
// store.dispatch(addBook("padma"));
// store.dispatch(deleteBook(1));  
// store.dispatch(incrementCount(10));
// store.dispatch(decrementCount(1));

export default store;


