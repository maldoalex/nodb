import React, { Component } from "react";

//display item

class MemeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: this.props.meme.topText,
      bottomText: this.props.meme.bottomText
    };
    this.changeBottomText = this.changeBottomText.bind(this);
    this.changeTopText = this.changeTopText.bind(this);
  }

  changeTopText = newTopText => {
    console.log(newTopText);
    this.setState({ topText: newTopText });
  };
  changeBottomText = newBottomText => {
    console.log(newBottomText);
    this.setState({ bottomText: newBottomText });
  };

  render() {
    console.log(this.state);
    //destructring
    const { topText, bottomText, ID, url } = this.props.meme;
    const { deleteMyMeme, updateMyMemes } = this.props;
    return (
      <div className="my-memes-meme">
        <div className="meme">
          <img src={url} alt="random meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <input
          className="my-memes-input"
          defaultValue={topText}
          onChange={event => this.changeTopText(event.target.value)}
        />
        <input
          className="my-memes-input"
          defaultValue={bottomText}
          onChange={event => this.changeBottomText(event.target.value)}
        />
        <button
          className="my-memes-btn-edit"
          onClick={() => {
            //same order of params
            updateMyMemes(this.state.topText, this.state.bottomText, ID);
            //pass params from parent props
          }}
        >
          Edit Text
        </button>
        <button
          className="my-memes-btn-delete"
          onClick={() => {
            deleteMyMeme(ID);
            //pass params from parent props
          }}
        >
          Delete Meme
        </button>
      </div>
    );
  }
}

export default MemeItem;
