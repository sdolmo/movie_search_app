var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=csi", function(error, response, body){
        if(!error && response.statusCode == 200) {
          var data = JSON.parse(body);
          res.render("results", {data: data});
        }
    });
});

app.listen(3000, function(){
  console.log("Check it OUT!!!");
});
