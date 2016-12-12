var fs = require('fs');

exports.uploadHandler = function(req, res){
	console.log("Upload Handler called");
	var imgData = req.body.imageData;
	//console.log("req.body.imageName=" + req.body.imageName);
	var buf = new Buffer(imgData, 'base64');
	fs.writeFileSync('./public/image.png', buf);
	var html = "<html><body><img src='image.png'></img></body></html>";
	res.write("Upload successful");
	res.end();
}//uploadHandler
