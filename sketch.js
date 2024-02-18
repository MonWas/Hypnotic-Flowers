let flowers = [];
let numberOfFlowers = 15;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  for (let i = 0; i < numberOfFlowers; i++) {
    if (i % 2 == 0) {
      flowers[i] = new Flower(140 - i * 10, 100, 15, 7, (i + 1) * 0.1);
    } else {
      flowers[i] = new Flower(140 - i * 10, 100, 15, 7, (i + 1) * -0.1);
    }
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < numberOfFlowers; i++) {
    flowers[i].display();
  }
}