const express = require("express");
const sequelize = require("./utils/db");
const route = require("./route/route");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

sequelize.sync();

app.get("/", (req, res) => {
  res.send("This is Marquee Database.");
});

app.use("/api/v1/companies", route);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}...`);
});
