import React, { Component } from "react";
import axios from "axios";

class AddMemeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image: "",
      error: ""
    };
  }

  handleChange = e => {
    // this.onSubmit({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      name: "",
      image: "",
      error: ""
    });
    axios.post("/api/memes/", this.state).then(res => {
      // console.log(res.data); //array of objects
      // this.props.updateOrders(res.data);
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
          name="image"
          placeholder="Image URL"
          onChange={e => this.handleChange(e)}
          value={this.state.image}
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
