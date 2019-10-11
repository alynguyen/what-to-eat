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
      await this.props.handleGetPref();
      await this.props.handleTerms();
        this.props.handleSearch();
        this.setState({ preference: '' });
    } catch (err) {
      console.log(err);
    }
  }

  handleDelete = async (id) => {
    console.log(id);
    try {
      await searchPref.delPref(id, this.state.user);
      await this.props.handleGetPref();
      await this.props.handleTerms();
        this.props.handleSearch();
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
              className="SearchBar-Btn"
              variant="danger"
              onClick={(e) => this.handleSubmit(e)}
              >
              Submit
            </Button>
            <Button 
              className="SearchBar-Btn"
              variant="danger"
              onClick={() => this.props.handleSearch()}
              >
              Search
            </Button>
            <Link to={`/${this.props.handleRandom()}`}>
              <Button 
                className="SearchBar-Btn"
                variant="danger"
                >
                Choose For Me!
              </Button>
            </Link>
          </Form>
        </div>
        <div className="SearchBar-Filters">
          {this.props.preferences.map((p, idx) => (
              <button 
                key={idx}
                className="btn-round-xs"
                onClick={() => this.handleDelete(p._id)}
                >
                {p.preference}
              </button>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
