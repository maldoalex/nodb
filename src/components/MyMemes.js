import React from "react";

function MyMemes(props) {
  return (
    <>
      <div>
        {props.myMemes.map((meme, index) => {
          return (
            <div key={index}>
              <div className="meme">
                <img src={meme.randomImg} alt="random meme" />
                <h2 className="top">{meme.topText}</h2>
                <h2 className="bottom">{meme.bottomText}</h2>
              </div>
              <input
                defaultValue={meme.topText}
                onChange={event => props.changeTopText(event.target.value)}
              />
              <input
                defaultValue={meme.bottomText}
                onChange={event => props.changeBottomText(event.target.value)}
              />
              <button
                onClick={() => {
                  console.log(meme.ID);
                  //same order of params
                  props.updateMyMemes(props.topText, props.bottomText, meme.ID);
                  //pass params from parent props
                }}
              >
                Edit Text
              </button>
              <button
                onClick={() => {
                  props.deleteMyMeme(meme.ID);
                  //pass params from parent props
                }}
              >
                Delete Meme
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MyMemes;
