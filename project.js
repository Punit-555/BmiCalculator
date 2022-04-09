const express = require("express");

const bodyParser = require("body-parser"); 

const app = express();



app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , function(req,res){
 res.sendFile(__dirname + "/index.html");  
     
});

// TO POSTING OUR DATA BY USING BODY-PARSER.

app.post("/", function(req,res){
 
     var w = Number(req.body.n1);
     var h = Number(req.body.n2);

     let result;
result = w/(h*h);

if(result<12){
    res.send("Your Bmi is " + result +  " & You are under weight.");
}
else if(result>15){
    res.send("Your Bmi is " + result +  " You are Fit");
}
else{
    res.send("Your Bmi is " + result + " Are Over Weight.");
}
 

});





app.listen(3000, function(){
 
    console.log("Server is Running.");   
     
});


