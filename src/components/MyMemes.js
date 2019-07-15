import React, { Component } from "react";
import MemeItem from "./MemeItem";

//mapping over library
// separation of concerns

function MyMemes(props) {
  return (
    <>
      <div>
        {props.myMemes.map((meme, index) => {
          return (
            <MemeItem
              meme={meme}
              key={index}
              changeTopText={props.changeTopText}
              changeBottomText={props.changeBottomText}
              deleteMyMeme={props.deleteMyMeme}
              updateMyMemes={props.updateMyMemes}
            />
          );
        })}
      </div>
    </>
  );
}

export default MyMemes;
