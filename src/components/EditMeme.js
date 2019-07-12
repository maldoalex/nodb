{
  /* <MemeItem
 updateMemes={this.updateMemes}
 name={meme.name}
 imgurl={meme.imgurl}
 key={meme.name}
/> */
}

updateMemes = newMemes => {
  this.setState({ memes: newMemes });
};
