import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SearchBar.css';
import searchPref from '../../services/searchPref';
import userService from '../../services/userService';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  state = {
    preference: '',
    user: this.props.user
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await searchPref.create(this.state);
        this.setState({ preference: '' });
        this.props.handleGetPref();
    } catch (err) {
      console.log(err);
    }
  }

  handleDelete = async (id) => {
    console.log(id);
    try {
      await searchPref.delPref(id, this.state.user);
      this.props.handleGetPref();
    } catch(err) {
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
        <div className="SearchBar-Filters">
          {this.props.preferences.map((p, idx) => (
            // <Link to={`users/pref/${p._id}/delete`}>
              <button 
                key={idx}
                className="btn-round-xs"
                onClick={() => this.handleDelete(p._id)}
                >
                {p.preference}
              </button>
            // </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
