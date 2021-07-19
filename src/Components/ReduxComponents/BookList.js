import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../Redux/Actions/BookAction";
import { bindActionCreators } from "redux";
import { decrementCount, incrementCount } from "../Redux/Actions/CountAction";
class BookList extends Component {
  componentDidMount() {
    // this.props.addBook("bindu");
    // this.props.addBook("padma");
    // this.props.incrementCount(10);
  }
  render() {
    console.log("hi vp", this.props.books);
    return (
      <div>
        <button onClick={() => this.props.addBook("alien")}>decrement</button>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return{
      books : state.books
    }
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({
    addBook : addBook
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList); 
