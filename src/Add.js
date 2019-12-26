import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class Add extends Component {
  state = {
    title: '',
    categories: '',
    content: ''
  }

  inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  formHandler(event) {
    event.preventDefault();
    let params = this.state;
    var _this=this;
    console.log(params)
    axios.post('http://reduxblog.herokuapp.com/api/posts', {
      title: params.title,
      categories: params.categories,
      content: params.content,
    })
    .then(function (response) {
      console.log(response);
      _this.props.history.push('/list');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>Add</h1>
        <form onSubmit={(e) => this.formHandler(e)}>
          <label>
            Title:
            <input type="text" name="title" onChange={e => this.inputChangeHandler(e)} />
          </label>
          <label>
            Categories:
            <input type="text" name="categories" onChange={e => this.inputChangeHandler(e)} />
          </label>
          <label>
            content:
            <input type="text" name="content" onChange={e => this.inputChangeHandler(e)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to='/list'>Go to List</Link> <br></br>
        <Link to='/'>Go to home</Link>
      </div>
    );
  }
}
export default Add;