const db = require("../db/db.json");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

app.post("/api/notes", function(req, res) {
  let newNote = req.body
  db.push(newNote);
  console.log("new note");
  });
}