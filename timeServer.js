function fillZero(val) {
	return (val < 10 ? '0' : '' )+ val;
}

function getCurDateTime() {
	const dt = new Date();
       
       return (dt.getFullYear() + '-' +
      fillZero(dt.getMonth() + 1) + '-' +
	  fillZero(dt.getDate()) + ' ' +
      fillZero(dt.getHours()) + ':' + 
      fillZero(dt.getMinutes()));

}

 var net = require('net')  

     var server = net.createServer(function (socket) {  
       		socket.end(getCurDateTime() + '\n')
     })



     server.listen(Number(process.argv[2]))  
