const db = require("../db/db.json");
const fs = require("fs");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json(db);
  })
}


