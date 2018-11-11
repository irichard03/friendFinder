const express = require("express");
const app = express();
const port = 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


//serve static files like css
app.use(express.static('/public'));

app.listen(port, function(){
    console.log("HEY I'm A POTATO!");
});