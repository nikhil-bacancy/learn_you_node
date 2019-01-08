var fs = require('fs');


fs.readFile(process.argv[2],'utf8',function callBack(err, data) {
	// body...
	if(err) {
		return console.log(err)
	}

	var NoOflines = data.split('\n').length-1;

	console.log(NoOflines)


});



