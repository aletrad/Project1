class Ball {
  constructor(game) {
    this.game = game;
    this.x = 250;
    this.y = 552;
    this.vx = 1;
    this.vy = -4;
    this.radius = 8;
    this.color = "red";
  }

  draw() {
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.game.ctx.closePath();
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fill();
  }
}