var fs = require('fs');

exports.uploadHandler = function(req, res){
	console.log("Upload Handler called");
	var imgData = req.body.imageData;
	//console.log("req.body.imageName=" + req.body.imageName);
	var buf = new Buffer(imgData, 'base64');
	fs.writeFileSync('./public/image.png', buf);
	//it is important to return res.json() for the client side to get server response in $.ajax.
	// res.write() does not work with $.ajax
	res.json("Upload successful");
}//uploadHandler
