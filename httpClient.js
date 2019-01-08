var http = require('http');

var url = process.argv[2];

http.get(url,function callBack(respons) {
	
	respons.setEncoding('utf8');
	respons.on("data", function responsCallBack(data) { 
		console.log(data);
	})
	respons.on("error",function errorCallBack(err) {
		console.error(err);
	}) 
})