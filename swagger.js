const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.0",
    title: "Harry Potter API",
    description: "API to explore Harry Potter characters and spells",
  },
  host:
    process.env.NODE_ENV === "production"
      ? process.env.RENDER_HOST
      : process.env.LOCAL_HOST,
  schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
