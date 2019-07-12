// FOR EXPRESS
const express = require("express");
const MemeController = require("./controllers/MemeController");
const app = express();

app.use(express.json());

app.get("/api/memes", MemeController.getMemes);

const PORT = 3009;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
