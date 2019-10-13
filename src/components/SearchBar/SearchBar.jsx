import React, { Component } from 'react';
import './SearchBar.css';
import searchPref from '../../services/searchPref';

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
    if (!this.state.preference) return;
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

  onClick(){
    window.location.href=`/${this.props.handleRandom()}`;
  }

  render() {

    let checkTotal = this.props.total ?
      <button 
        className="btn-custom"
        onClick={() => this.onClick()}
        >
        <i className="fas fa-dice"></i>
      </button>
    : <div />

    let checkTotalEx = this.props.total ?
      <button 
        className="btn-custom"
        onClick={() => this.onClick()}
      >
        Choose For Me!
      </button>
    : <div />

    let search = this.props.user ?        
       <div className="SearchBar-PrefContainer">
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
          onClick={(e) => this.handleSubmit(e)}
          >
          Search
        </button>
        {checkTotalEx}
       </div>   
      : <div />

    let searchCol = this.props.user ?        
      <div className="SearchBar-ColPref">
       <input 
         className="SearchBar-Input"
         type='text'
         placeholder="Add Preferences"
         value={this.state.preference}
         name="preference"
         onChange={this.handleChange}
         />
       <button 
         className="btn-custom SearchBar-ColBtn"
         style={{marginRight: '.5rem'}}
         onClick={(e) => this.handleSubmit(e)}
         >
         <i className="fas fa-search"></i>
       </button>
       {checkTotal}
      </div>   
     : 
      this.props.total ?
        <button 
          onClick={() => this.onClick()}
          className="SearchBar-Btn btn-custom"
        >
          Choose For Me!
        </button>
      : <div />

    return (
      <div className="SearchBar">
        <div className="SearchBar-Flex">
          {search}
          {searchCol}
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
