const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(bodyParser.urlencoded({extende:true}))
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
  //console.log(req.body.crypto)
  request("https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=2",function(error,response,body){
    console.log(response.statusCode)
  })
})
app.listen(3000,function(){
  console.log("we are on port 3000");
});
