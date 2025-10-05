console.log("------ Array Method ------");

// forEach
let arr = [10, 20, 30, 40];
arr.forEach(function(val, key) {
    console.log(`Array value in index-${key} is ${val}`);
});

// Map
let arrSquare = arr.map((val) => val * val);
console.log(arrSquare);