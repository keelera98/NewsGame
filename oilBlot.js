function oilBlot(x, y){
  this.size = 10;
  this.x = x;
  this.y = y;

  this.display = function(size){
    fill(0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}