# note-taker

## Description

This application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The following HTML routes.

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 

  ### Application link

* [GitHub repositories](https://github.com/mugich/note-taker)
* [Heroku deployed link](https://heroku-note-taker.herokuapp.com/)



### Application's appearance
![screenshot](./image/note-taker.png)