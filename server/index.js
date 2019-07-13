const express = require("express");
const app = express();
const MemeController = require("./controllers/MemeController");

app.use(express.json());

app.get("/api/memes", MemeController.getMemes);
app.post("/api/memes", MemeController.addMeme);

const PORT = 3009;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
