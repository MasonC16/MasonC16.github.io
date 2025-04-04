//Name: Mason Cutts
//File: main.js
//Date: 4 April 2025
//This file is js for displaying bouncing balls on a webpage

//adding the count into the top right of the program
const para = document.querySelector('p');
let count = 0;

//setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//function to generate random RGB color value
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//creating an Shape class
class Shape{
	constructor(x, y, velX, velY){
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
	}
	
}

//creating Ball class that extends the Shape class
class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {	
  
	super(x, y, velX, VelY);
	
    this.color = color;
    this.size = size;
	this.exists = true;
  }

  //thing to draw the circle
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  //adding stuff to update the thing
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

//replaced the collisonDetect 
  collisionDetect() {
  for (const ball of balls) {
    if (!(this === ball) && ball.exists) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        ball.color = this.color = randomRGB();
      }
    }
  }
}

}
		
//creating the evilCircle class	
class EvilCircle extends Shape {
	constructor(x,y) {
		super(x, y, 20, 20);
		
		this.color = "white";
		this.size = 10;
		
		//adding events to move the evilcircle with the keys
		window.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "a":
					this.x -= this.velX;
					break;
				case "d":
					this.x += this.velX;
					break;
				case "w":
					this.y -= this.velY;
					break;
				case "s":
					this.y += this.velY;
					break;
				}
			});
		}
		
	//	
	draw() {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.lineWidth = 3;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.stroke();
  }
  
  //checking the bounds of the evilcircle and adjusting it so it doesnt go off screen
	checkBounds() {
		if ((this.x + this.size) >= width) {
			this.x -= this.size;
		}

		if ((this.x - this.size) <= 0) {
			this.x += this.size;
		}

		if ((this.y + this.size) >= height) {
			this.y -= this.size;
		}

		if ((this.y - this.size) <= 0) {
			this.y += this.size;
		}
	}

//collision detection to remove the balls when the evil circle touches them
  collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
          count--;
          para.textContent = 'Ball count: ' + count;
        }
      }
    }
  }
  
}

//creating an array to store all the balls
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    //ball position always drawn at least one ball width
    //away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

   balls.push(ball);
   count++;
   para.textContent = 'Ball count: ' + count;
}

//creating a evilball constant with all its attributes
const evilBall = new EvilCircle(random(0, width), random(0, height));

//creating a function that will create the different balls
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  //for loop to add all the elements to the balls
  for (const ball of balls) {
    if (ball.exists) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  //adding the evil circle into the program
  evilBall.draw();
  evilBall.checkBounds();
  evilBall.collisionDetect();

  requestAnimationFrame(loop);
  
}

loop();
