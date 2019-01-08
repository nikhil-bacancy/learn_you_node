var bl = require('bl');
var http = require('http');

var result = [];
var count = 0;

function printData(filedata) {
	for (var i = 0 ; i < 3 ; i++) {
		console.log(filedata[i])
	}	
}


function geturlsData(index)
{	
	
	http.get(process.argv[index + 2],function(response) {
		 response.pipe(bl(function (err, data) {
		 	if (err) {
		 		return console.error(err);
		 	}
		 	
		 	 result[index] = data.toString();

		 	 if (++count === 3) {
		 	 	printData(result);
		 	 }
		 }))

	})

}

for (var i = 0 ; i < 3 ; i++) {
	geturlsData(i);
}
