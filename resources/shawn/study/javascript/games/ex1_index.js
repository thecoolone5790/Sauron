/**
 * Created by shawn on 2017. 7. 19..
 */


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.moveTo(0,0);
ctx.lineTo(400,200);
ctx.stroke();

// ctx.beginPath();
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();