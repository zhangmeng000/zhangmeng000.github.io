var express = require("express");//引入第三方模块
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.get("/getdata",function(req,res){
	var obj = {
		name:"zhang",
		age:"20"
	};
	res.send(obj)
});

app.post("/postdata",function(req,res){
	var obj1 = {name:"张"};
	if(req.body.name == obj1.name){
		res.send(true)
	}
})
app.get("/get",function(req,res){
	res.send("success")
})

app.listen(3000)