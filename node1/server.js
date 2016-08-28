var http = require("http");//引入http模块
http.createServer(function(req,res){
	//http创建服务
	res.end("hello node");
	//响应结束返回
}).listen(3000);//访问服务器的端口号