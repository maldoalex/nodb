import React from "react";

//change to stateful comp topt, bott, url => add button to send to mymemes

function AddMemeForm(props) {
  return (
    <div>
      <form className="add-meme-form">
        <input
          placeholder="Image URL"
          onChange={event => props.changeUrl(event.target.value)}
        />
        <input
          placeholder="text on top"
          onChange={event => props.changeTopText(event.target.value)}
        />
        <input
          placeholder="text on bottom"
          onChange={event => props.changeBottomText(event.target.value)}
        />
      </form>
      <div className="add-meme">
        {props.url && <img src={props.url} alt="random meme" />}
        <h2 className="top">{props.topText}</h2>
        <h2 className="bottom">{props.bottomText}</h2>
      </div>

      <button className="add-meme-form-btn-cancel" type="reset">
        Cancel
      </button>
      <button
        className="add-meme-form-btn-submit"
        onClick={e =>
          props.addToMyMemes(e, {
            topText: props.topText,
            bottomText: props.bottomText,
            url: props.url
            // ID: props.ID
          })
        }
      >
        Submit
      </button>
    </div>
  );
}

export default AddMemeForm;
