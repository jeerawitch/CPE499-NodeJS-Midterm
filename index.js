const express = require("express");
const app = express();
const footballRouter = require("./football/index");
const morgan = require("morgan");

app.use(express.static("public"));
app.use(morgan("common", { immediate: true }));
app.use("/football", footballRouter);

app.get("/", (req, res) => {
  res.redirect("/football");
});

app.listen(8080, () => {
  console.log("Server is listening to http://localhost:8080");
});
