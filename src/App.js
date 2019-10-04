import React, { Component } from 'react';
import './App.css';
import { getAllYelp } from './services/yelp-api'

export class App extends Component {

  async componentDidMount() {
    const {results} = await getAllYelp();
    console.log(results);
  }

  render() {
    return (
      <div>
        What To Eat
      </div>
    );
  }
}

export default App;
