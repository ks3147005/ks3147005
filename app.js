
const express = require("express");
const https = require("https");
const bodyparser = require("body-parser")

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req , res){
res.sendFile(__dirname + "/index.html")
  
});
app.post("/", function(req,res){
const query = req.body.cityName; 
const apiKey = "fd512f4379f04d1ffbde777d60484e72"
const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "appid=" + apiKey + "&units=" + unit;

https.get(url, function(response){
console.log(response.statusCode);

response.on("data", function(data){
const weatherData = JSON.parse(data);
const temp = weatherData.main.temp;
const weatherDescription = weatherData.weather[0].description
const icon = weatherData.weather[0].icon
const imageURL = "https//:openweathermap.org/img/wn/" + icon + "@2x.png"
res.write("<p>The weather is currently " + weatherDescription + "</p>")
res.write("<h1>The temperature in " + query + "is "+ temp + " degree celcius </h>");
res.write("<img src=" + imageURL + ">");
res.send()
});

    
 });



});



app.listen(3000, function(){
    console.log("server is running on port 3000")
});