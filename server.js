const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);

var nerdProfile = [
    {
        name: "MrPotato",
        email: "MrPotato@email.com",
        gamerScore: 1,
        scienceScore: 1,
        fantasyScore: 1,
        SciFiScore:1,
    },
];

   
app.listen(port, function(){
    console.log("HEY I'm A POTATO!");
});