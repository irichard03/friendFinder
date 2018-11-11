const nerds = require('../data/friends');
const path = require("path");

module.exports = function(app) {
  
  //get nerds
  app.get("/api/nerds", function(request, response) {
       response.send(nerds);
  });
  
  //Post Nerds and find compatible nerd friends.
  app.post("/api/nerds", function(request, response) {
    let newNerd = request.body;  
    newNerd.routeName = newNerd.name.replace(/\s+/g,"").toLowerCase();
    nerds.push(newNerd);   
    
    let matchNerd = nerdTest(newNerd);
    
    response.json(matchNerd.name);

  });
};

function nerdTest(object){
  let variance =0;
  let matchArray = [];
  //loop through each nerd record object
  nerds.forEach(function(element) {
      //console.log(element);
      //loop through each nerd record answer
      for(let i = 0; i <= 9; i++){
              variance += (element[i] > object.answers[i]) ? (element[i] - object.answers[i]) : (object.answers[i] - element[i]);
          
      }
      //console.log(variance);
      matchArray.push(variance);
      variance = 0;
  });
  console.log(matchArray);
  let lowestNumber = 40;  //assuming max variance of 40, if an element is lower than this, it becomes low number.
  let pick = 0;
  for(let j = 0; j <= matchArray.length; j++){
      if(matchArray[j] < lowestNumber){
          lowestNumber = matchArray[j];
          pick = j -1;
      }
  }
  console.log("Lowest number is: " + lowestNumber + "\nMatch is: " + nerds.answer[pick]);
  return nerds.answers[pick];
}

