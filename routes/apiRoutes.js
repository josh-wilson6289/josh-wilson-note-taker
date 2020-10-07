const db = require("../db/db.json");
const fs = require("fs");
const uniqid = require("uniqid");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    let newId = uniqid();
    newNote.id = newId;
    console.log(newNote);
    db.push(newNote);
    res.json(db);
  });

  app.delete("/api/notes:id", function(req, res) {
    db.splice();
    res.json(db);
  });

}


