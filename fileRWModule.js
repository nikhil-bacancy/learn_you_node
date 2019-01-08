var fs = require('fs');
var path = require('path');



module.exports = function (file,fExt,callBack) {

	fs.readdir(file,function (err,listOffiles) {
		if (err) {
			return callBack(err);;
		}
		else{
			var filteredFiles = listOffiles.filter(file => {
				return path.extname(file) === '.' + fExt;	
			});
			
			callBack(null,filteredFiles);
		}
	})
}


