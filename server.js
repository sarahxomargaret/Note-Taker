const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use("/", api);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

  app.listen(PORT, () => {
    console.log(
      `Note saver is listening at http://localhost:${PORT}`
    );
  });