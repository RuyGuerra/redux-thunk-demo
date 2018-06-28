import React, { Component } from 'react'
import { Button, Nav, Form, Input } from 'reactstrap';

class Search extends Component {
  state = {
    term: ''
  }

  handleClick = (event) => {
     event.preventDefault();   
     this.props.searchRequested(this.state.term);
  }

  termChangeHandler = (event) => {
    this.setState({term: event.target.value})
  }

  render() {
    return (
      <Nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Subreddit Finder</a>
        <Form className="form-inline">
          <Input
            onChange={this.termChangeHandler}
            value={this.state.term}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search">
          </Input>
          <Button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={this.handleClick}>
            {this.props.children}
          </Button>
        </Form>
      </Nav>
    );
  }
}

export default Search;