// ===============================================================================
// LOAD DATA
const fs = require('fs');

// ROUTING
// ===============================================================================
module.exports = app => {

    var jsonData = [];

    app.get("/api/notes", function(req, res) {

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) throw err;

          jsonData = JSON.parse(data);
          res.json(jsonData);            
      });
      });
      // API POST Requests
      app.post("/api/notes", function(req, res) {

            jsonData.push(req.body);   
            res.json(true);
            updateDb();
                 
      }); 
    function updateDb() {
        fs.writeFile("./db/db.json",JSON.stringify(jsonData,'\t'),err => {
            if (err) throw err;
            return true;
        });
    }

   
  
}