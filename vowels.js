function countVowels(string) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var numberOfDuplicates = 0;
    var vowelsInString = "";

    //check for vowels
    for (letter in string) {
        if (!(vowelsInString.includes(string[letter])) && vowels.includes(string[letter])) {
            vowelsInString += string[letter];
        }
    }

    //check for duplicates - uses set theory
    original = string;
    const uniqueItems = new Set();
    const duplicates = new Set();

    for (const value of original) {
        if (uniqueItems.has(value)) {
            duplicates.add(value);
            uniqueItems.delete(value);
        }
        else {
            uniqueItems.add(value);
        }
    }

    return [vowelsInString, duplicates.size];
}
console.log(countVowels("aaei"));