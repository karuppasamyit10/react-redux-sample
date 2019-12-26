import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class Edit extends Component {
  state = {
    title: '',
    categories: '',
    content: ''
  }

  componentDidMount(){
    console.log(this.props.match.params.id);
    this.getPostById(this.props.match.params.id);
  }

  //function to post list api
  getPostById = (id) => {
    var _this= this;
    console.log(id)
    axios.get('http://reduxblog.herokuapp.com/api/posts/'+id)
      .then(function (response) {
        // handle success
        console.log(response.data);
        _this.setState({
          title: response.data.title,
          categories: response.data.categories,
          content: response.data.content
          },() => {console.log(_this.state);});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  formHandler(event) {
    event.preventDefault();
    let params = this.state;
    console.log(params)
    axios.post('http://reduxblog.herokuapp.com/api/posts', {
      title: params.title,
      categories: params.categories,
      content: params.content,
    })
    .then(function (response) {
      console.log(response);
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
            <input type="text" name="title" onChange={e => this.inputChangeHandler(e)} value={this.state.title} />
          </label>
          <label>
            Categories:
            <input type="text" name="categories" onChange={e => this.inputChangeHandler(e)} value={this.state.categories}/>
          </label>
          <label>
            content:
            <input type="text" name="content" onChange={e => this.inputChangeHandler(e)}  value={this.state.content}/>
          </label>
          <input type="submit" value="Update" />
        </form>
        <Link to='/list'>Go to List</Link> <br></br>
        <Link to='/'>Go to home</Link>
      </div>
    );
  }
}
export default Edit;