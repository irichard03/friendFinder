const express = require("express");
const app = express();
const port = 3000;

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.use(express.urlencoded({ extended: true}));
//json parse...somthing
app.use(express.json());

//serve static files like css
app.use(express.static('public'));

app.listen(port, function(){
    console.log("HEY I'm A POTATO!");
});