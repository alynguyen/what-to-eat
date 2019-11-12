import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAllYelp } from '../../services/yelp-api';
import MainPage from '../MainPage/MainPage';
import ShowPage from '../ShowPage/ShowPage';
import LoadPageShow from '../LoadPage/LoadPageShow';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../services/userService';
import searchPref from '../../services/searchPref';
import { getCurrentLatLng } from '../../services/location';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const stars = {
  0: 'images/stars/regular/regular_0.png',
  1: 'images/stars/regular/regular_1.png',
  1.5: 'images/stars/regular/regular_1_half.png',
  2: 'images/stars/regular/regular_2.png',
  2.5: 'images/stars/regular/regular_2_half.png',
  3: 'images/stars/regular/regular_3.png',
  3.5: 'images/stars/regular/regular_3_half.png',
  4: 'images/stars/regular/regular_4.png',
  4.5: 'images/stars/regular/regular_4_half.png',
  5: 'images/stars/regular/regular_5.png',
}

const stars_lrg = {
  0: 'images/stars/large/large_0.png',
  1: 'images/stars/large/large_1.png',
  1.5: 'images/stars/large/large_1_half.png',
  2: 'images/stars/large/large_2.png',
  2.5: 'images/stars/large/large_2_half.png',
  3: 'images/stars/large/large_3.png',
  3.5: 'images/stars/large/large_3_half.png',
  4: 'images/stars/large/large_4.png',
  4.5: 'images/stars/large/large_4_half.png',
  5: 'images/stars/large/large_5.png',
}

export class App extends Component {

  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      results: [],
      total: null,
      preferences: [],
      terms: '',
      user: userService.getUser()
    };
  }

  async componentDidMount() {

    const {lat, lng} = await getCurrentLatLng();
    if (this.state.user) {
      let terms = [];
      const preferences = await searchPref.getPref(this.state.user._id);
      await preferences.map( p => (
        terms.push(p.preference)
        ))
      this.setState({
        preferences: preferences,
        terms: terms.join(', ')
      })
    }

    const results =  await getAllYelp(lat, lng, this.state.terms);
    this.setState({
      lat,
      lng,
      results: results.businesses,
      total: results.total
    })

  }

  handleLocation = async () => {
    try {
      const {lat, lng} = await getCurrentLatLng();
      this.setState({ lat, lng })
      this.componentDidMount();
    } catch (err) {
      console.log(err);
    }
  }

  handleGetPref = async () => {
    try {
      let pref = await searchPref.getPref(this.state.user._id);
      this.setState({
        preferences: pref
      })
    } catch (err) {
      console.log(err);
    }
  }
  
  handleSearch = async () => {
    try {
      const results = await getAllYelp(this.state.lat, this.state.lng, this.state.terms);
      this.setState({
        results: results.businesses,
        total: results.total
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleLogout = () => {
    userService.logout()
    this.setState({ 
      user: null,
      preferences: [],
      terms: ''
    }, () => this.handleSearch());
  }

  handleSignupOrLogin = async () => {
    this.setState({user: userService.getUser()});
    this.componentDidMount();
  }

  handleRandom = () => {
    return Math.floor(Math.random() * Math.floor(this.state.results.length));
  }

  handleTerms = () => {
    let terms = [];
    this.state.preferences.map( p => (
      terms.push(p.preference)
      ))
    this.setState({
      terms: terms.join(', ')
    })
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
          <MainPage 
            stars={stars}
            user={this.state.user}
            results={this.state.results}
            total={this.state.total}
            location={this.state.lat, this.state.lng}
            preferences={this.state.preferences}
            handleSignupOrLogin={this.handleSignupOrLogin}
            handleLogout={this.handleLogout}
            handleSearch={this.handleSearch}
            handleGetPref={this.handleGetPref}
            handleRandom={this.handleRandom}
            handleTerms={this.handleTerms}
            handleLocation={this.handleLocation}
          />
          }/>
        <Route exact path='/:id' render={ props =>
          this.state.results.length
          ?
            <ShowPage 
              {...props}
              data={this.state.results[props.match.params.id]}
              user={this.state.user}
              stars={stars_lrg}
              starsRg={stars}
              handleRandom={this.handleRandom}
            />
          :
            <LoadPageShow
              user={this.state.user}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

