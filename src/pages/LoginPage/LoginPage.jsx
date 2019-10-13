import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import userService from '../../services/userService';
import './LoginPage.css'

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <Navbar />
        <header className="header-footer"></header>
        <div className="LoginPage-Container">
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <h1>Email / Password</h1>
            <div className="form-group">
              <div className="col-sm-12">
                <input autoComplete="email" type="email" className="form-control inp-custom" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input autoComplete="current-password" type="password" className="form-control inp-custom" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="btn-out btn-login">Log In</button>&nbsp;&nbsp;&nbsp;
                <Link to='/' className="btn-custom link">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
