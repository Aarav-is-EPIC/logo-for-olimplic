canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.arc(300,200,40,0,2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.arc(400,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.arc(350,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "yellow";
ctx.arc(250,250,40,0,2 * Math.PI);
ctx.stroke();


