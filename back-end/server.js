// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
// Allows access to .env file and its vars; and turns on our server
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
