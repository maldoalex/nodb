import React, { Component } from "react";

function MyMemes(props) {
  return (
    <>
      <div>
        {props.myMemes.map((meme, index) => {
          return (
            <div className="my-memes-meme" key={index}>
              <div className="meme">
                <img src={meme.url} alt="random meme" />
                <h2 className="top">{meme.topText}</h2>
                <h2 className="bottom">{meme.bottomText}</h2>
              </div>
              <input
                className="my-memes-input"
                defaultValue={meme.topText}
                onChange={event => props.changeTopText(event.target.value)}
              />
              <input
                className="my-memes-input"
                defaultValue={meme.bottomText}
                onChange={event => props.changeBottomText(event.target.value)}
              />
              <button
                className="my-memes-btn-edit"
                onClick={() => {
                  //same order of params
                  props.updateMyMemes(props.topText, props.bottomText, meme.ID);
                  //pass params from parent props
                }}
              >
                Edit Text
              </button>
              <button
                className="my-memes-btn-delete"
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

// import React from "react";
// import MemeItem from "./MemeItem";

// function MyMemes(props) {
//   return (
//     <>
//       <div>
//         {props.myMemes.map((meme, index) => {
//           return (
//             <MemeItem
//               meme={meme}
//               index={index}
//               name={meme.name}
//               url={meme.url}
//               topText={meme.topText}
//               bottomText={meme.bottomText}
//               changeTopText={meme.changeTopText}
//               changeBottomText={meme.changeBottomText}
//               updateMyMemes={meme.updateMyMemes}
//               myMemes={meme.myMemes}
//               deleteMyMeme={meme.deleteMyMeme}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default MyMemes;
