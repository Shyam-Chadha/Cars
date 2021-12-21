const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine','ejs');

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/ImgDB");

const imgSchema = mongoose.Schema({
    img:String,
    title:String,
    subtitle:String,
    summary:String
});

const imgmodel = mongoose.model("car",imgSchema);




app.get("/",function (req,res) {
    
    imgmodel.find(function (err,car) {
        if(car.length === 0){
            imgmodel.insertMany(array,function (err) {
                if(err){
                    console.log(err);
                }else{
                    console.log("success");
                }
            });
            res.redirect("/");
        }  
        else{
                res.render("main",{arr:car});
            }
      }); 
});










app.listen(3000, function () {
    console.log("Successfully started port 3000");
});