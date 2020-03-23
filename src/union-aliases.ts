function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-text" | "as-number"
) {
    if( typeof input1 === "number" && typeof input2 === "number" 
        && resultConversion === "as-number" ) {
        return input1 + input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

const combineAges = combine(30, 16, "as-number");
const combineName = combine("Mona", "Lisa", "as-text");

console.log(combineAges);
console.log(combineName);