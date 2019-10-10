import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SearchBar.css';
import searchPref from '../../services/searchPref';
import userService from '../../services/userService';

class SearchBar extends Component {
  state = {
    preference: '',
    userPreferences: [null],
    user: this.props.user
  };

  async handleGetPref() {
    try {
      console.log('searchbar', this.state.user._id)
      let pref = await searchPref.getPref(this.state.user._id)
        this.setState({
          userPreferences: pref
        })
      console.log('pref', pref)
    } catch(err) {
      console.log(err);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    try {
     searchPref.create(this.state)
      this.setState({
        preference: '',
      }, 
      () => this.handleGetPref()
      )
      this.handleGetPref();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-Flex">
          <Form>
            <input 
              className="SearchBar-Input"
              type='text'
              placeholder="Add Preferences"
              value={this.state.preference}
              name="preference"
              onChange={this.handleChange}
            />
            <Button 
              variant="danger"
              onClick={(e) => this.handleSubmit(e)}
              >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
