import React, { Component } from "react";
import axios from "axios";

class MemeLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/memes")
      .then(response => {
        this.setState({ memes: response.data });
      })
      .catch(error => {
        this.setState({ error: "ERROR!!!" });
      });
  }

  render() {
    console.log(this.state.memes);
    return (
      <>
        <ul>
          {this.state.memes.map(meme => (
            <li>
              <h3>{meme.name}</h3>
              <img key={meme.name} src={meme.imgurl} alt="random meme" />
            </li>
          ))}
        </ul>
        <p>{this.state.error}</p>
      </>
    );
  }
}

export default MemeLibrary;
