const path = require("path");
const express = require("express");

const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const server = require("http").createServer(app);

const OpenApiValidator = require("express-openapi-validator");
const { connectDatabase } = require("./config/database.js");

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb" }));

app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, `swagger/openapi.yml`),
    validateRequests: true,
    operationHandlers: path.join(__dirname, "./controllers"),
  })
);

server.listen(3000, async () => {
  console.log("Server listening at port %d", process.env.PORT);
  await connectDatabase();
});
