function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let a = getRandomInt(5);         //trochu zložitejšie cez random
let b = getRandomInt(5);
let c = getRandomInt(5);

console.log("Random cislo a: " + a);
console.log("Random cislo b: " + b);
console.log("Random cislo c: " + c);


if (a == b) {
    if (a == c) {
        console.log("Rovnake su: 3");
    } else if (b != c) {
        console.log("Rovnake su: 2");
    }
}

else if (b == c) {
    if (a != c) {
        console.log("Rovnake su: 2");
    }
}
else if (a == c) {
    if (b != c) {
        console.log("Rovnake su: 2");
    }
}
else {
    console.log("Rovnake su: 0");

}