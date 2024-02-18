class Flower {
  constructor(r, points, flowerAmplitude, period, speed) {
    this.x = [];
    this.y = [];
    this.r = r;
    this.points = points;
    
    this.flowerRadius = 0;
    this.flowerAmplitude = flowerAmplitude;
    this.period = period;
    
    this.speed = speed;
    this.rot = 0;
  }
  
  display() {
    push();
    blendMode(DIFFERENCE);
    stroke(0);
    noStroke();
    fill(255);
    beginShape();
    for (let i = 0; i < this.points; i++) {
      let angle = i / this.points * 360;
      this.flowerRadius = this.flowerAmplitude * cos(angle * this.period);
      this.x[i] = (this.r + this.flowerRadius) * cos(angle + this.rot);
      this.y[i] = (this.r + this.flowerRadius) * sin(angle + this.rot);
      vertex(this.x[i], this.y[i]);
    }
    endShape(CLOSE);
    pop();
    this.rot += this.speed;
  }
}