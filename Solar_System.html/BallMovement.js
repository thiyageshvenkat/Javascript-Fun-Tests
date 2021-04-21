var Ball = function () {
    this.Ballcoords = p1coords
    this.x = 450;
    this.y = 337.5;
    this.xSpeed = 5;
    this.ySpeed = 5;
    this.newDirection = 0;
    };

var circle = function(x, y, radius, fillCircle, color) {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
        ctx.fill();
    }else{
        ctx.stroke();
    }
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, 10, true, "Black");
};

Ball.prototype.move = function () {
   this.x += this.xSpeed;
   this.y += this.YSpeed;
};

Ball.prototype.moveLeft = function () {
    this.x -= 3.5;
}

Ball.prototype.moveRight = function () {
    this.x += 3.5;
}

Ball.prototype.moveUp = function () {
    this.y += 3.5;
}

Ball.prototype.moveDown = function () {
    this.y -= 3.5;
}


var Ball2 = function () {
    this.Ballcoords = p1coords
    this.x = 100;
    this.y = 100;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.newDirection = 0;
    };

var circle = function(x, y, radius, fillCircle, color) {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
        ctx.fill();
    }else{
        ctx.stroke();
    }
};

Ball2.prototype.draw = function () {
  circle(this.x, this.y, 30, false, "Black");
};

Ball2.prototype.move = function () {
   this.x += this.xSpeed;
   this.y += this.YSpeed;
};

Ball2.prototype.moveLeft = function () {
    this.x -= 1.5;
}

Ball2.prototype.moveRight = function () {
    this.x += 1.5;
}

Ball2.prototype.moveUp = function () {
    this.y += 1.5;
}

Ball2.prototype.moveDown = function () {
    this.y -= 1.5;
}
var circle = function(x, y, radius, fillCircle, color) {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
        ctx.fill();
    }else{
        ctx.stroke();
    }
};
