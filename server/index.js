//The "Backend" -- gives responses to the requests of the "Frontend"

//Express is a framework that makes it easier to write JS code within React

//the Controller is the backend file that holds many of the functions that produce the responses for the frontend's requests

//get, post, put, delete are the CRUD methods used for axios

const express = require("express");
const app = express();
const MemeController = require("./controllers/MemeController");

app.use(express.json());

app.get("/api/memes", MemeController.getMemes);
app.post("/api/memes", MemeController.addMeme);

//MyMemes
app.get("/api/myMemes", MemeController.getmyMemes);
//MemeGenerator
app.post("/api/myMemes", MemeController.addmyMeme);
//keep params the same as controller
app.put("/api/myMemes/:ID", MemeController.updateMyMemes);
app.delete("/api/myMemes/:ID", MemeController.deleteMyMeme);

//Form
app.post("/api/myMemes", MemeController.addToMyMemes);

//Search on Home page using query
app.get("/api/filteredMemes", MemeController.getFilteredMemes);

const PORT = 3009;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
