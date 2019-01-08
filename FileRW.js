var fs = require('./fileRWModule.js');

var file = process.argv[2];
var fExt = process.argv[3];




fs(file,fExt,function getFilteredFiles(err,filteredFiles) {
	
	if(err){
		return console.log(err);
	}
	filteredFiles.forEach(filteredFile => {
		  console.log(filteredFile);
	});
});