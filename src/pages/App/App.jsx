import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { getAllYelp } from '../../services/yelp-api';
import MainPage from '../MainPage/MainPage';
import ShowPage from '../ShowPage/ShowPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import { getCurrentLatLng } from '../../services/location';


export class App extends Component {

  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const {lat, lng} = await getCurrentLatLng();
    this.setState({
      lat,
      lng
    })
  }
  
  handleSearch = () => {
    const {results} = getAllYelp(this.state.lat, this.state.lng);
    console.log(results);
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' render={() =>
          <MainPage 
            handleLogout={this.handleLogout}
            handleSearch={this.handleSearch}
            user={this.state.user}
          />
        } />
        <Route exact path='/show' render={() =>
          <ShowPage />
        } />
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/signup' render={({ history }) => 
          <SignUpPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            history={history}
          />
        }/>
        </Switch>
      </div>
    );
  }
}

export default App;
