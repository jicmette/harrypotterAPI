require("dotenv").config();

const express = require("express");
const connectDataBase = require("./src/database/connection");
const homeAPI = require("./src/routes/homeRoute");
const charactersRoutes = require("./src/routes/charactersRoutes");
const spellsRoutes = require("./src/routes/spellsRoutes");
const apiDocsRoute = require("./src/routes/swagger");

connectDataBase();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

// Middleware to enable Cross-Origin Resource Sharing (CORS)
// Allows the API to handle requests from different origins
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

// Route Home
app.use("/", homeAPI);

// Routes endpoints
app.use("/characters", charactersRoutes);
app.use("/spells", spellsRoutes);
app.use("/api-docs", apiDocsRoute);

app.listen(port, () => {
  console.log("Web Server is listening at port " + port);
  console.log(`Swagger docs avaiable at http://localhost:${port}/api-docs`);
});
