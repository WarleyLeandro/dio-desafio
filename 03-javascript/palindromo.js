const palindromo = (string) => {
    if (!string) return;
    return string.split("").reverse().join("") == string
};

console.log(palindromo("arara"))
console.log(palindromo("casa"))

const palindromo2 = (string) => {
    if (!string) return;
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) return false
    }
    return true
};

console.log(palindromo2("arara"))
console.log(palindromo2("casa"))