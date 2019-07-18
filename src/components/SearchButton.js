import React, { Component } from "react";
import axios from "axios";
import MyMemes from "./MyMemes";

class SearchButton extends Component {
  constructor(props) {
    super();
    this.state = {
      type: "",
      filteredMemes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFilteredMemes = () => {
    axios.get(`api/filteredMemes/?type=${this.state.type}`).then(res => {
      console.log(res.data);
      this.setState({ type: res.data });
    });
  };

  handleSubmit() {
    this.getFilteredMemes();
  }

  handleChange(e) {
    this.setState({ type: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your type of meme:
            <select
              id="type-select"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="" Please choose an option />
              <option value="FUNNY">FUNNY</option>
              <option value="ANIMATION"> ANIMATION</option>
              <option value="WOMEN">WOMEN</option>
              <option value="POLITICS">POLITICS</option>
              <option value="SCIENCE">SCIENCE</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          if(!this.state.filteredMemes.length){}
          {/* if(this.props.filteredMemes.length !== 0) return(
          {<MyMemes />}) */}
        </div>
      </div>
    );
  }
}

export default SearchButton;
