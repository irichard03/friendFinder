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
    
   
    
    let matchNerd = nerdTest(newNerd);
    nerds.push(newNerd);   
    //send response! 
    response.send(matchNerd);
  });
};
//newNerd.answers[i] element.answers[i]
function nerdTest(newNerd){
  let variance = 0;
  let matchArray = [];
  nerds.forEach(function(element){
    //console.log(element);
    for(let i = 0; i <= 9; i++){
      variance += (element.answers[i] > newNerd.answers[i]) ? (element.answers[i] - newNerd.answers[i]) : (newNerd.answers[i] - element.answers[i]);
    }
    matchArray.push(variance);
    //console.log(variance);
    variance = 0;
  });
  //console.log(matchArray);
  let lowestNumber = 40; //assuming max variance of 40 if an element is lower than this it becomes lowest.
  let pick = 0;
  for(let j = 0; j <= matchArray.length; j++){
    if(matchArray[j] < lowestNumber){
      lowestNumber = matchArray[j];
      pick = j;
    }
  }
  //console.log(pick);
  //console.log(lowestNumber);
  return(nerds[pick]);
}