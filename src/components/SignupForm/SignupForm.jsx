import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import Navbar from '../../components/Navbar/Navbar';
import './SignupForm.css'

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <Navbar />
        <header className="header-footer"></header>
        <div className="SignupForm-Container">
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <h1> Sign Up Form</h1>
            <div className="form-group">
              <div className="col-sm-12">
                <input autoComplete="name" type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input autoComplete="email" type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input autoComplete="new-password" type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input autoComplete="confirm-password" type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="btn-out btn-login" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                <Link className="btn-custom link" to='/'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
