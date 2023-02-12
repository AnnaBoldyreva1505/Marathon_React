const express = require("express");
const cors = require("cors");
const { slidesController } = require("./controllers");

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

//----- DEMO START ----------------------------
function rootController(request, response) {
  response.status(200).send("12345");
}

app.get("/", rootController);
//----- DEMO END ------------------------------

function nameController(request, response) {
  response.status(200).send("Anna");
}

app.get("/name", nameController);

app.get("/slides", slidesController.getSlides);

module.exports = app;
