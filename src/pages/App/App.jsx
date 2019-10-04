import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { getAllYelp } from '../../services/yelp-api';
import MainPage from '../MainPage/MainPage';
import ShowPage from '../ShowPage/ShowPage';
import NavBar from '../../components/NavBar/NavBar';

export class App extends Component {

  async componentDidMount() {
    const {results} = await getAllYelp();
    console.log(results);
  }

  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' render={() =>
        <MainPage />
        } />
        <Route exact path='/show' render={() =>
        <ShowPage />
        } />
        </Switch>
      </div>
    );
  }
}

export default App;
