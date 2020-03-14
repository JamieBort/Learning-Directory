let car = {
  color: 'red',
  type: 'Coupe',
  make: 'Chevy',
  model: 'Volt',
  speed: 0
  drive: function(speed) {
    this.speed = speed;
  }
  honk: function() {
    return 'Beep';
  }
}

console.log(car.honk());
