var col = true;
	
function uploadPic() {
    var Pic = document.getElementById("myCanvas").toDataURL("image/png");
    Pic = Pic.replace(/^data:image\/(png|jpg);base64,/, "")
    console.log("Uploading to server");
    // Sending the image data to Server
    $.ajax({
        type: 'POST',
        url: '/upload',
        data: '{ "imageData" : "' + Pic + '" }',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg) {
            console.log(msg);
            document.getElementById('message').innerHTML = msg;
        }
    });

}//uploadPic

function rectangle(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "40px Arial";
    ctx.strokeText("Got Print", 100, 40);
    ctx.fillStyle = "green";
    ctx.fillRect(50, 50, 15, 15);

    col = false;
}

function move(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.translate(40, 0);
    if (col){
        ctx.fillStyle = "green";
        col = false;
    }else{
        ctx.fillStyle = "red";
        col = true;
    }
    
    ctx.fillRect(50, 50, 15, 15);
}

rectangle();

