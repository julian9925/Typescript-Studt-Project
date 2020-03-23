let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Jerry";

if (typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errCode: code };
}

function test(): void {

}

try {
    const result = generateError("Error Happened", 500);
} catch (err) {
    console.log(err);
}