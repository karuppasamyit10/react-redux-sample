import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Test extends Component 
{
    render() {
        return (
          <div>
            <h1>Test Page</h1>
            <Link to='/'>Go to home</Link>
          </div>
          );
    }
}
export default Test;