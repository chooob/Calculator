const express = require("express");
const bodyParser = require("body-parser");
const app  = express();

//urlencoded gives us form data
//app.use(bodyParser.urlencoded({extended:true})); OLD

//express version of the same function as above allows us access to form data.
app.use(express.urlencoded());

//__dirname will give the directory of the file it is currently at
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

//responds to any post methods
app.post("/",function(req,res){

  //to access individual elements use body."name of attribute" EXAMPLE. body.num1 body.num2
  console.log(req.body.num1);
  console.log(req.body.num2);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  //object,string,buffer object, array only these types can be use with res.send();
  //res.send("Thanks for sending "+(num1+num2));
  res.send(""+(num1+num2));
});

//the name is the extension of the website at where the page will show
app.get("/bmiCalculator24",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//post name will be matching same name in html
app.post("/bmiCalculator142",function(req,res){
  var height = Number(req.body.Height);
  var weight = Number(req.body.Weight);

  var n = (height*height)/weight;

  res.send("Your BMI is "+n);
})

app.post("/bmiCalculator2",function(req,res){
  var height = Number(req.body.Height);
  var weight = Number(req.body.Weight);

  var n = (height*height)/weight;

  res.send("Your BMI is Test");
})


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
