var fs = require('fs');


var bufData = fs.readFileSync(process.argv[2]);

var NoOflines = bufData.toString().split('\n').length-1;

console.log(NoOflines)


