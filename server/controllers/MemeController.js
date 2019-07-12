const memes = [
  {
    name: "Conan",
    imgurl:
      "https://i.pinimg.com/564x/5c/c8/4e/5cc84e01b24a0947d59040f8cabad500.jpg",
    texttop: "test",
    textbottom: "test",
    emotion: "satisfaction"
  },
  {
    name: "Chris Farley",
    imgurl:
      "https://media1.giphy.com/media/HSUvpPzY6bEeQ/giphy.webp?cid=790b76115d2782e8702f4d45634bfd7f&rid=giphy.webp",
    texttop: "test",
    textbottom: "test",
    emotion: "direction"
  },
  {
    name: "The Duke",
    imgurl:
      "https://m.media-amazon.com/images/M/MV5BOTlhZDczZjItMmZlMi00NDdkLWE4ZjAtN2Q1M2YxODAyMTFhXkEyXkFqcGdeQXVyMjg2MDcyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    texttop: "test",
    textbottom: "test",
    emotion: "warning"
  },
  {
    name: "The Professional",
    imgurl:
      "https://i.kym-cdn.com/entries/icons/mobile/000/008/509/everyone2.jpg",
    texttop: "test",
    textbottom: "test",
    emotion: "angry"
  },
  {
    name: "The Matrix",
    imgurl: "https://i.imgflip.com/1n36ue.jpg",
    texttop: "test",
    textbottom: "test",
    emotion: "enlightened"
  }
];

const getMemes = (req, res) => {
  res.json(memes);
};

const addMeme = (req, res) => {
  const { name, image } = req.body;
};

module.exports = {
  getMemes
};
