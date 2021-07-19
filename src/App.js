import React, { Component } from 'react'
import { Provider } from 'react-redux';
import UserAuth from './Components/FireBaseConnection/UserAuth';
import store from './Components/Redux/Store';
import BookList from './Components/ReduxComponents/BookList';
import BookListFunctional from './Components/ReduxComponents/BookListFunctional';
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <BookList name="anajaiah"/>
      //   <BookListFunctional/>
      // </Provider>
      <UserAuth/> 
    )
  }
}
export default App;
