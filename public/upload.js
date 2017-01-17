var colBoolean = false;

function getColor(){
    var xcol = "";
    if (colBoolean){
        xcol = "green";
        colBoolean = false;
    }else{
        xcol = "red";
        colBoolean = true;
    }
    return xcol;
}	

function init(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "40px Cambria";
    ctx.strokeStyle = "green";
    ctx.strokeText("Raw Canvas", 100, 40);
}
init();


function rectangle(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.translate(20, 0);
    ctx.fillStyle = getColor();
     ctx.fillRect(20, 50, 19, 19);
}

function circle(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");    
    ctx.translate(-22, 0);
    ctx.fillStyle = getColor();
    ctx.beginPath();
    ctx.arc(20, 100, 10, 0, 2.0*Math.PI);
    ctx.stroke();
    ctx.fill();
}



function uploadPic(canvas, imgName) {
    var Pic = document.getElementById(canvas).toDataURL("image/png");
    Pic = Pic.replace(/^data:image\/(png|jpg);base64,/, "")
    console.log("Uploading to server, imgName=" + imgName);
    // Sending the image data to Server
    $.ajax({
        type: 'POST',
        url: '/upload',
        data: '{ "imageData" : "' + Pic + '"}',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg) {
            console.log(msg);
            document.getElementById('message').innerHTML = msg;
        },
        error: function () {
            console.log("ERROR");
        }
    });

}//uploadPic

/* *************************************************************************  */
var x2 = 0;
var fabCanvas;
function init2(){
    fabCanvas = new fabric.Canvas("c");
    var fabCircle = new fabric.Circle({ 
        radius: 20, fill: '#f55', top: 10, left: 300 
    });

    var txt = new fabric.Text("Hello Fabric.js", {
        shadow: 'rgba(0,0,0,0.2) 0 0 5px'
    });

    fabCanvas.add(txt);
    fabCanvas.add(fabCircle);
}
init2();

function addTriangle(){
    x2 += 50;
    fabCanvas.add(new fabric.Triangle({
                width: 30, height: 30, fill: getColor(), left: x2, top: 50
    }));
}
function addRect(){
    x2 += 50;
    fabCanvas.add(new fabric.Rect({
        left: x2,
        top: 100,
        fill: getColor(),
        width: 30,
        height: 30,
        angle: 45
    }));
}

