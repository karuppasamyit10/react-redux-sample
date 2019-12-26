import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class  Welcome extends Component 
{
    render() {
        return (
            <div className="App">
                <p>
                  Welcome to react-learning
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              <div>
                   <Link to='/list'>Go to list</Link>
              </div>
              <div>
                   <Link to='/Test'>Go to Test</Link>
              </div>
            </div>
          );
    }
}
export default Welcome;