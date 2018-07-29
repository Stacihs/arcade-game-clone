class Entities {
  constructor(sprite, x, y) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
  }


}

// Enemy class object which is used to create enemies
class Enemy extends Entities {
  constructor(sprite, x, y) {
    super();
    this.sprite = 'images/enemy-bug.png';
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
      enemy3.x += dt * 75;
    }
  }

// Draws the enemy on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

}


//Player class object which is used to create players
class Player extends Entities {
  constructor(sprite, x, y) {
    super();
    this.sprite = 'images/char-horn-girl.png';
    this.x = 205;
    this.y = 405;
  }

  update() {
//check to see if enemy and player collide
    for (let enemy of allEnemies) {
      if (this.y - 16 === enemy.y) {
        player.reset();
      }
    }
  }

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
          this.x -= 100;
        }
        break;
      case 39:
        if (this.x >= 5 && this.x < 400) {
          this.x += 100;
        }
        break;
      case 38:
        if (this.y > 80 && this.y < 440) {
            this.y -= 82;
        } else if (this.y = -5) {
          player.gameOver();
        }
        break;
      case 40:
        if (this.y >= -5 && this.y < 405) {
          this.y += 82;
        }
        break;
      default:
    }
  }

  reset() {
    this.x = 205;
    this.y = 405;
  }

  gameOver() {
      modal.style.visibility = "visible";
    }
}


// Create enemies
const enemy1 = new Enemy(this.sprite, 0, 61);
const enemy2 = new Enemy(this.sprite, 150, 143);
const enemy3 = new Enemy(this.sprite, -100, 225);
const allEnemies = [enemy1, enemy2, enemy3];

// Create the player
let player = new Player();

const modal = document.querySelector('.modal');
const button = document.querySelector('button');


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



button.addEventListener('click', function(e) {
  player.reset();
  modal.style.visibility = "hidden";
})
