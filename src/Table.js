import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import axios from 'axios';

class Table extends Component 
{ 
  state = {
    postList: []
  }
  
  componentDidMount(){
    this.getPostList();
  }

  onDeletePostById = (id) => {
    var _this=this;
    http://reduxblog.herokuapp.com/api/posts/5
    axios.delete('http://reduxblog.herokuapp.com/api/posts/'+id)
      .then(function (response) {
        // handle success
        console.log(response.data);
        _this.getPostList();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  //function to post list api
  getPostList = () => {
    var _this= this;
    axios.get('http://reduxblog.herokuapp.com/api/posts')
      .then(function (response) {
        // handle success
        console.log(response.data);
        _this.setState({
          postList : response.data
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
    
  
  render() {
        return (
          <div>
            <Link to='/add'>Add</Link>
            <table>
              <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Content</th>
                </tr>
              </thead>
            <tbody>
                {this.state.postList.map( post => 
                  <tr key={post.id}>
                    <td>{post.id?post.id:'none'}</td>
                    <td>{post.title?post.title:'none'}</td>
                    <td>{post.content?post.content:'none'}</td>
                    <td><Link to={`/edit/${post.id}`}>Edit</Link></td>
                    <td><a href="#" onClick= {() => {this.onDeletePostById(post.id)}}>Delete</a></td>
                  </tr>
                  )}
            </tbody>
            </table>
          <Link to='/'>Go to home</Link>
          </div>
          );
    }
}
export default Table;