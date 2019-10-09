import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { getAllYelp } from '../../services/yelp-api';
import MainPage from '../MainPage/MainPage';
import ShowPage from '../ShowPage/ShowPage';
import LoadPage from '../LoadPage/LoadPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import { getCurrentLatLng } from '../../services/location';
import 'bootstrap/dist/css/bootstrap.min.css';

const stars = {
  0: 'images/stars/regular_0.png',
  1: 'images/stars/regular_1.png',
  1.5: 'images/stars/regular_1_half.png',
  2: 'images/stars/regular_2.png',
  2.5: 'images/stars/regular_2_half.png',
  3: 'images/stars/regular_3.png',
  3.5: 'images/stars/regular_3_half.png',
  4: 'images/stars/regular_4.png',
  4.5: 'images/stars/regular_4_half.png',
  5: 'images/stars/regular_5.png',
}

export class App extends Component {

  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      results: [],
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const {lat, lng} = await getCurrentLatLng();
    const results =  await getAllYelp(lat, lng);
    await this.setState({
      lat,
      lng,
      results: results
    })
  }
  
  handleSearch = () => {
    // this.setState({results: getAllYelp(this.lat, this.lng)})
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
        <Route exact path='/' render={() =>
          this.state.results.length
          ? 
          <MainPage 
            handleLogout={this.handleLogout}
            handleSearch={this.handleSearch}
            user={this.state.user}
            results={this.state.results}
            stars={stars}
          />
          :
          <LoadPage
            user={this.state.user}
          />
          }/>
        <Route exact path='/:id' render={ props =>
          this.state.results.length
          ?
          <ShowPage 
          {...props}
          data={ this.state.results[props.match.params.id] }
          user={this.state.user}
          />
          :
          <LoadPage
            user={this.state.user}
          />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

