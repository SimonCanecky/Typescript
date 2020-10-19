let cisla = [2, 3, 1, 0];

cisla = multipleByLenght();
console.log(cisla);

function multipleByLenght() {
    for (let number = 0; number < cisla.length; number++) {
        cisla[number] = cisla[number] * cisla.length;
    }
    return cisla;
}