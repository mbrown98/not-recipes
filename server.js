const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

const app = express();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log("Server listening on port ", +PORT);
});
