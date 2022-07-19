const Sequelize = require("sequelize");

const sequelize = new Sequelize("marquee", "postgres", "8520", {
  host: "localhost",
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;