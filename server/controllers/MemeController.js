const memes = require("./MemeLibrary");
const myMemes = require("./MyMemeLibrary");

const getMemes = (req, res) => {
  res.json(memes);
};

const addMeme = (req, res) => {
  const { name, url } = req.body;
  if (!name || !url) {
    return res.status(417).json("Name and URL are required mofo!");
  }
  memes.push({ name, url: url });
  res.json(memes);
};

//MyMemes
const getmyMemes = (req, res) => {
  res.json(myMemes);
};

const addmyMeme = (req, res) => {
  const ID = myMemes.length + 1;
  const { topText, bottomText, randomImg } = req.body;
  if (!topText || !bottomText || !randomImg) {
    return res.status(417).json("Name and URL are required");
  }
  myMemes.push({ topText, bottomText, randomImg, ID });
  res.json(myMemes);
};

const updateMyMemes = (req, res) => {
  const { topText, bottomText } = req.body;
  const { ID } = req.params;
  const memeIndex = myMemes.findIndex(meme => {
    return meme.ID == ID;
  });
  myMemes[memeIndex].topText = topText;
  myMemes[memeIndex].bottomText = bottomText;
  res.json(myMemes);
};

const deleteMyMeme = (req, res) => {
  const { ID } = req.params;
  const memeIndex = myMemes.findIndex(meme => {
    return meme.ID == ID;
  });
  myMemes.splice(memeIndex, 1);
  //splice
  res.json(myMemes);
};

module.exports = {
  getMemes,
  addMeme,
  getmyMemes,
  addmyMeme,
  updateMyMemes,
  deleteMyMeme
};
