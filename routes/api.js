const apiRouter = require('express').Router();
const fs = require('fs');
const storedNotes = require('../db/db.json');
let noteData = storedNotes;

// GET route for retrieving all the notes
apiRouter.get('/notes', (req, res) => res.json(noteData));

// POST route for saving a new note
apiRouter.post("/notes", function (req, res) {
    var newNote = (req.body);
    console.log(newNote);

    storedNotes.push(newNote);
    req.body.index = storedNotes.length;
    res.json(newNote);

    fs.writeFile(storedNotes, newNote, "utf8", function (err) {
      if (err) throw err;
    
    });

});

module.exports = apiRouter;