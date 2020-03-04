function hello () {
    console.log("hello world")
}
hello()

var car = {color: 'blue'}

console.log(car)

function carFactory(color){
    car = {};
    car.color = color;
    return car;
}

var car2 = new carFactory('green')

console.log(car2)