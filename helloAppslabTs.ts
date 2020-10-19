function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let a = getRandomInt(10);         
let b = getRandomInt(10);
let c = getRandomInt(10);

if (a + b > c && a + c > b && b + c > a){
    console.log("Hodnoty: " + a + ", " + b + ", " + c);
    console.log("Trojuhlonik: true");
}
else{
    console.log("Hodnoty: " + a + ", " + b + ", " + c);
    console.log("Trojuhlonik: false");
}