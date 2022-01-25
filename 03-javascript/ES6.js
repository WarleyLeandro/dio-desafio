const carro = {
    value: 4,
}
const arr = [1, 2, 3, 4, 5, 6]

// map

function mapThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value
    }, thisArg)
}

console.log(mapThis(arr, carro))

//filter

const fil = (item)=> item % 2 ==0

const resp = arr.filter(fil)

console.log(resp)

// reduce

const red = (acc, value) => acc += value

const resp2 = arr.reduce(red)

console.log(resp2)