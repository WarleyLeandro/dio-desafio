//substituir numeros pares do array por 0

const substituiPares = (array) => {
    if (!array) return -1
    if (!array.length) return -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = 0;
        }
    }
    return array;
};

let arr = [1, 2, 3, 6, 8, 5];
console.log(substituiPares(arr));
