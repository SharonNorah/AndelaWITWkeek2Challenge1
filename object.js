/*Javascript program that returns an object where
the property names are numbers between 1 and 15 
and values are square of the numbers*/
console.log("\nJS program that returns an object with the property names and their values");

// function to square numbers
function square(n) {
    return n * n;
}

// object
const SquaredNumbers = {
    "2": square(2),
    "3": square(3),
    "4": square(4),
    "5": square(5),
    "6": square(6),
    "7": square(7),
    "8": square(8),
    "9": square(9),
    "10": square(10),
    "11": square(11),
    "12": square(12),
    "13": square(13),
    "14": square(14)
}

console.log('Object: ', SquaredNumbers);


const entries = Object.entries(SquaredNumbers);
// console.log(entries);

// content of object
for (const [number, square] of entries) {
    console.log(`The square of ${number} is ${square}`);
}