// Enemies our player must avoid
var allEnemies = [];
var enemypos = [70, 140, 220];
// declaring enemy
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};
for (i = 0; i < enemypos.length; i++) {
  min = 30;
  max = 130;
  // added random speed to enemies
  var random = Math.random() * (max - min) + min;
  // creating enemy objects
  var enemy = new Enemy(0, enemypos[i], random);
  allEnemies.push(enemy);
}
// Update the enemies position required method for game
Enemy.prototype.update = function(dt) {
  this.x = this.x + (this.speed * dt);
  // math.random
  if (this.x >= 505) {
    this.x = 0;
  }
  // to perform  collision
  if (player.x < this.x + 75 && player.x + 42 > this.x &&
    player.y < this.y + 50 && player.y + 65 > this.y) {
    player.x = 205;
    player.y = 400;
    swal({
      title: "wrong move",
      // type:"success",
      imageUrl: "images/tenor.gif",
      confirmButtonText: "playagain"

    });

  }
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
// to give enemy image
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite = 'images/enemy-bug.png'), this.x, this.y);
};

var player;
// allocation the player image
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.image = 'images/char-boy.png'

}
// setting the player position
var player = new Player(205, 400);
// to update the player position
Player.prototype.update = function(dt) {

};
// to display the player
Player.prototype.render = function() {

  ctx.drawImage(Resources.get(this.image), this.x, this.y);
}
// enables the player to move in the canvas
player.handleInput = function(action) {
  if (action == "right") {
    if (this.x < 360) {
      this.x += 100;
    }
  }
  if (action == "left") {
    if (this.x > 15) {
      this.x -= 100;
    }
  }
  if (action == "up") {
    if (this.y > 20) {
      this.y -= 82;
    }
  }
  if (action == "down") {
    if (this.y < 380) {
      this.y += 82;
    }
  }
  if (this.y < 60) {
    swal({
      title: "congrats",
      // type:"success",
      imageUrl: "images/congo.gif",
      confirmButtonText: "playagain"
    }, function() {
      location.reload();
    })
  }

}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
