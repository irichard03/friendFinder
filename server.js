const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


//serve static files like css
app.use(express.static(path.join(__dirname,'./app/public')));

app.listen(port, function(){
    console.log("HEY I'm A POTATO!");
});