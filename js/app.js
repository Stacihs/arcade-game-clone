// Enemies our player must avoid
class Enemy  {
  constructor(sprite = 'images/enemy-bug.png', x, y, speed) {
    // Variables applied to each of our instances go here
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    // this.speed = ;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
  }

  // Draw the enemy on the screen, required method for game
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}



// Now write your own player class
class Player {
  constructor(sprite, x, y) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
  }

  update(dt) {

  }


  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput() {

  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy1 = new Enemy(this.sprite, 0, 60);
let enemy2 = new Enemy(this.sprite, 0, 150);
let enemy3 = new Enemy(this.sprite, 0, 225);
const allEnemies = [enemy1, enemy2, enemy3];
// Place the player object in a variable called player
let player = new Player('images/char-horn-girl.png', 205, 430);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
