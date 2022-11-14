const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();

const items= ["Pizza", "burger", "Noodles"];
const workItems=[];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/",function(req, res){
const day = date.getDate();
    
   res.render("list", {listTitle: day, addNewItems: items } );
    
});
app.post("/", function(req,res){
    
    const item = req.body.addItem;
    if(req.body.list === "work"){
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work", function(req, res){
res.render("list", {listTitle: "work List", addNewItems: workItems})
});

app.get("/about", function(req, res){
res.render("about");
});

app.listen(3000, function(){
    console.log("server is working");
});