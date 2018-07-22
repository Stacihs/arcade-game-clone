// Enemies our player must avoid
class Enemy  {
  constructor(sprite = 'images/enemy-bug.png', x, y, ) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
  }

  // Updates the enemy's position and sets speed
  update(dt) {
    this.x += dt * 150;
    if (this.x > 505) {
      this.x = -10;
    }
  }

  // Draws the enemy on the screen
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}


//Player class
class Player {
  constructor(sprite, x, y) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
  }

  update(dt) {

  }

// Draws player on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

//Handles player movement, set the boundaries for player placement on board
  handleInput() {
    let key = event.which;
    switch (key) {
      case 37:
        if (player.x > 5 && player.x < 500) {
          player.x -= 50;
        }
        break;
      case 39:
        if (player.x >= 5 && player.x < 400) {
          player.x += 50;
        }
        break;
      case 38:
        if (player.y >= 10 && player.y <= 440) {
          player.y -= 30;
        }
        break;
      case 40:
        if (player.y >= -10 && player.y <= 410) {
          player.y += 30;
        }
        break;
      default:
    }
  }
}

// Create enemies
let enemy1 = new Enemy(this.sprite, 0, 60);
let enemy2 = new Enemy(this.sprite, 150, 150);
let enemy3 = new Enemy(this.sprite, -100, 225);

const allEnemies = [enemy1, enemy2, enemy3];
// Create the player
let player = new Player('images/char-horn-girl.png', 205, 440);


//Create event listener on keys to be used for player movement
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.key]);
});
