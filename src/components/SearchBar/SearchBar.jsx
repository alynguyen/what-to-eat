import React, { Component } from 'react';
import './SearchBar.css';
import searchPref from '../../services/searchPref';
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
    let search = this.props.user ?        
       <div>
        <input 
          className="SearchBar-Input"
          type='text'
          placeholder="Add Preferences"
          value={this.state.preference}
          name="preference"
          onChange={this.handleChange}
          />
        <button 
          className="SearchBar-Btn btn-custom"
          variant="danger"
          onClick={(e) => this.handleSubmit(e)}
          >
          Search
        </button>
       </div>   
      : <div />

    let rngBtn = this.props.total
      ?
        <Link to={`/${this.props.handleRandom()}`}>
          <button 
            className="SearchBar-Btn btn-custom"
            >
            Choose For Me!
          </button>
        </Link>
      : <div />

    return (
      <div className="SearchBar">
        <div className="SearchBar-Flex">
          {search}
          {rngBtn}
        </div>
        <div className="SearchBar-Filters">
          {this.props.preferences.map((p, idx) => (
            <div key={idx} className="SearchBar-FilterBtn">
              <button 
                className="btn-round-xs"
                onClick={() => this.handleDelete(p._id)}
                >
                  {p.preference}
              </button>
              <i className="far fa-trash-alt"></i>
            </div>
          ))}
        </div>
       </div>
    );
  }
}

export default SearchBar;
