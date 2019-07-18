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

//MemeGenerator
const addmyMeme = (req, res) => {
  console.log(req.body);
  const ID = myMemes.length + 1;
  const { topText, bottomText, url } = req.body;
  if (!topText || !bottomText || !url) {
    return res.status(417).json("Name and URL are required");
  }
  myMemes.push({ topText, bottomText, url, ID });
  res.json(myMemes);
};

//AddMemeForm
const addToMyMemes = (req, res) => {
  const ID = myMemes.length + 1;
  const { topText, bottomText, url } = req.body;
  if (!topText || !bottomText || !url) {
    return res.status(417).json("Name and URL are required");
  }
  myMemes.push({ topText, bottomText, url, ID });
  res.json(myMemes);
};

const updateMyMemes = (req, res) => {
  const { topText, bottomText } = req.body;
  const { ID } = req.params;
  console.log(topText);
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

const getFilteredMemes = (req, res) => {
  console.log("this is a query", req.query);
  // {
  // rating: 8,
  // type: 'SCIENCE'
  // }
  let memeList = [...memes];

  const filteredMemes = memeList.filter(meme => meme.type == req.query.type);

  res.status(200).json(filteredMemes);
};

module.exports = {
  getMemes,
  addMeme,
  getmyMemes,
  addmyMeme,
  updateMyMemes,
  deleteMyMeme,
  addToMyMemes,
  getFilteredMemes
};
