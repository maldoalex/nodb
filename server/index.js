const express = require("express");
const app = express();
const MemeController = require("./controllers/MemeController");

app.use(express.json());

app.get("/api/memes", MemeController.getMemes);
app.post("/api/memes", MemeController.addMeme);

//MyMemes
app.get("/api/myMemes", MemeController.getmyMemes);
app.post("/api/myMemes", MemeController.addmyMeme);
//keep params the same as controller
app.put("/api/myMemes/:ID", MemeController.updateMyMemes);
app.delete("/api/myMemes/:ID", MemeController.deleteMyMeme);

const PORT = 3009;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
