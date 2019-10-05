import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { getAllYelp } from '../../services/yelp-api';
import MainPage from '../MainPage/MainPage';
import ShowPage from '../ShowPage/ShowPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  // async componentDidMount() {
  //   const {results} = await getAllYelp();
  //   console.log(results);
  // }

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
