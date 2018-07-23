// Enemies our player must avoid
class Enemy  {
  constructor(sprite = 'images/enemy-bug.png', x, y, ) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
  }

  // Updates the enemy's position and sets speed
  update(dt) {
    if (this.x > 505) {
      this.x = -10;
    } else {
      enemy1.x += dt * 100;
      enemy2.x += dt * 55;
      enemy3.x += dt * 70;
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

  update(dt) {}

// Draws player on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

//Handles player movement, sets the boundaries for player placement on board
  handleInput() {
    let key = event.which;
    switch (key) {
      case 37:
        if (this.x > 5 && this.x < 500) {
          this.x -= 50;
        }
        break;
      case 39:
        if (this.x >= 5 && this.x < 400) {
          this.x += 50;
        }
        break;
      case 38:
        if (this.y >= 10 && this.y <= 440) {
          this.y -= 30;
        }
        break;
      case 40:
        if (this.y >= -10 && this.y <= 410) {
          this.y += 30;
        }
        break;
      default:
    }
  }

  // gameWon() {
  //    if(this.y = -10) {
  //      !wonGame;
  //      const modal = document.querySelector('.modal');
  //      modal.style.visibility = "visible";
  //    } else {
  //      modal.style.visibility = 'hidden';
  //    }
  // }
}

let wonGame = false;

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

// if(player.y = -10) {
//   player.gameWon();
// }
