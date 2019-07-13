import React, { Component } from "react";
import axios from "axios";

class AddMemeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      url: "",
      error: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      name: "",
      url: "",
      error: ""
    });
    axios.post("/api/memes/", this.state).then(res => {
      // console.log(res.data); //array of objects
      // this.props.updateMemes(res.data);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form>
        <input
          name="name"
          placeholder="meme description"
          onChange={e => this.handleChange(e)}
          value={this.state.name}
        />
        <input
          name="url"
          placeholder="Image URL"
          onChange={e => this.handleChange(e)}
          value={this.state.url}
        />
        <button type="reset">Cancel</button>
        <button onClick={e => this.onSubmit(e)} type="submit">
          Submit
        </button>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </form>
    );
  }
}

export default AddMemeForm;

// onClick={this.handleClick};

// handleClick = (e) => {
//  e.preventDefault();
//  axios.post("/api/orderList/", this.state).then(res => {
//   // console.log(res.data); //array of objects
//   // this.props.updateOrders(res.data);
//  })
// };
