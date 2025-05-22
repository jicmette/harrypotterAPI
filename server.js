const express = require("express");
const dotenv = require("dotenv");
const connectDataBase = require("./src/database/connection");
const homeAPI = require("./src/routes/homeRoute");
const charactersRoute = require("./src/routes/charactersRoute");
const spellsRoutes = require("./src/routes/spellsRoute");

connectDataBase();

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

// Route Home
app.use("/", homeAPI);

//Routes endpoints
app.use("/characters", charactersRoute);
app.use("/spells", spellsRoutes);
//app.use("/api-docs", apiDocsRoute);

app.listen(port, () => {
  console.log("Web Server is listening at port " + port);
  //console.log(`Swagger docs avaiable at http://localhost:${port}/api-docs`);
});
