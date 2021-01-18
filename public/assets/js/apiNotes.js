// ===============================================================================
// LOAD DATA
const fs = require("fs");

// var data = require("../db.json");



// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
 
  app.get("/api/notes", function(req, res) {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      var jsonData = JSON.parse(data);
    
      if (err) {
          console.log(`Error reading file from disk: ${err}`);
      } else {
        res.json(jsonData);
              }
  });
  });



  // API POST Requests
 
  app.post("/api/notes", function(req, res) {

    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  
};
