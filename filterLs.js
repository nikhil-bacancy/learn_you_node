var fs = require('fs');
var path = require('path');

var file = process.argv[2];
var fExt = process.argv[3];

fs.readdir(file,function callBack(err,listOffiles) {
	if (err) {
		return console.log(err);
	}
	else{
		var filteredFiles = listOffiles.filter(file => {
			return path.extname(file) === '.' + fExt;	
		});
		
		filteredFiles.forEach(filteredFile => {
		  console.log(filteredFile);
		});
	}
})