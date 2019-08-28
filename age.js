//week2challenge1part b
console.log("Enter your year of birth");
process.stdin.once('data', (chunk) => {
    let age = chunk.toString();
    let today = new Date().getFullYear();

    //year difference
    var yeardiff = today - age;

    console.log(yeardiff);
    if (yeardiff < 18) {
        console.log("You are a Minor");
    } else if (yeardiff >= 18 && yeardiff <= 36) {

        console.log("You are a Youth");
    } else {

        console.log("You are an elder");
    }
});
