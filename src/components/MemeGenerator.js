import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/gft6.jpg"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  //Component did mount

  handleGenerate(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.props.allMemeImgs.length);
    const randMemeImg = this.props.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  }

  handleSubmit() {
    const { topText, bottomText, randomImg } = this.state;
    const newMeme = { topText, bottomText, url: randomImg };
    this.props.addmyMeme(newMeme);
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleGenerate}>
          {/* <img src={this.state.randomImg} /> */}
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="random meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <button className="gen-add-lib" onClick={this.handleSubmit}>
          Add to my library
        </button>
      </div>
    );
  }
}

export default MemeGenerator;

// handleSubmit() {
//   const { topText, bottomText, randomImg } = this.state;
//   const newMeme = { topText, bottomText, url: randomImg };
//   this.props.addmyMeme(newMeme);
// }

// <button
//   onClick={e =>
//     props.addmyMeme(e, {
//       topText: props.topText,
//       bottomText: props.bottomText,
//       url: props.url,
//       ID: props.ID
//     })
//   }
// >
//   Submit
//         </button>
