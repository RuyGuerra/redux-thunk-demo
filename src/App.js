import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search';
import * as actions from './store/actions';
import { connect } from 'react-redux';
import Posts from './Posts/Posts';
import Spinner from './Spinner/Spinner';
import NotFound from './NotFound/NotFound';

class App extends Component {

  onSearch = (term) => {
    console.log('onSearch: ', term);
    this.props.selectTerm(term);
    this.props.fetchPosts(term);
  }

  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <h1>Redux-Thunk Demo</h1>
        </header>
        
        <Search searchRequested={this.onSearch}>SEARCH</Search>
        <NotFound error={this.props.error}></NotFound>
        
        {
          this.props.isFetching
          ? <Spinner />
          : <Posts items={this.props.items} />
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.postsByTerm.items,
    isFetching: state.postsByTerm.isFetching,
    term: state.selectTerm.term,
    fetchFailure: state.postsByTerm.fetchFailure,
    error: state.postsByTerm.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTerm: (term) => dispatch(actions.selectTerm(term)),
    fetchPosts: (term) => dispatch(actions.fetchPosts(term))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
