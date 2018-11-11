const nerds = require('../data/friends');
const path = require("path");

module.exports = function(app) {
  
  //get nerds
  app.get("/api/nerds", function(request, response) {
       response.send(nerds);
  });
  
  //Post Nerds and find compatible nerd friends.
  app.post("/api/nerds", function(request, response) {
      response.push(request.body);
      console.log(request.body);
  });

};