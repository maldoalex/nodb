import React, { Component } from "react";
import axios from "axios";

class AddMeme extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      imgurl: "",
      texttop: "",
      textbottom: "",
      emotion: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.state.imgurl) {
            this.setState({ error: "Please fill out all fields" });
          } else {
            axios
              .post("/api/memes", {
                name: this.state.name,
                imgurl: this.state.imgurl,
                texttop: this.state.texttop,
                textbottom: this.state.textbottom,
                emotion: this.state.emotion
              })
              .then(response => {
                this.props.changeView("library");
              })
              .catch(error => {
                console.log("error");
                this.setState({
                  error: "ERROR!!!"
                });
              });
          }
        }}
      >
        <input
          name="name"
          placeholder="Meme Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          imgurl=""
          placeholder="Image URL"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          texttop=""
          placeholder="Text at top of image"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          textbottom=""
          placeholder="Text at bottom of image"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          emotion=""
          placeholder="emotion category"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <button type="reset">Clear</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddMeme;
