var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var p1coords;

var ball = new Ball

var directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
}

setInterval(function () {
ctx.clearRect(0, 0, canvas.width, canvas.height)

var newDirection;
$("body").keydown(function (event) {
    ball.newDirection = event.keyCode;
});

 {
    ball.draw();
   // ball.moveRight();
    if (ball.newDirection === 39) {
        ball.moveRight();
    }
    if (ball.newDirection === 37) {
        ball.moveLeft();
    }

    if (ball.newDirection === 40) {
        ball.moveUp();
    }

    if (ball.newDirection === 38) {
        ball.moveDown();
    }
    ball.newDirection = 0;
}
   ctx.strokeRect(0, 0, 900, 675)
}, 30);

var ball2 = new  Ball2;

var directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
}

setInterval(function () {


var newDirection;
$("body").keydown(function (event) {
    ball2.newDirection = event.keyCode;
});

//if (newDirection === 39)
 {
    ball2.draw();
   // ball.moveRight();
    if (ball2.newDirection === 39) {
        ball2.moveRight();
    }
    if (ball2.newDirection === 37) {
        ball2.moveLeft();
    }

    if (ball2.newDirection === 40) {
        ball2.moveUp();
    }

    if (ball2.newDirection === 38) {
        ball2.moveDown();
    }
    ball2.newDirection = 0;
}

}, 30);
