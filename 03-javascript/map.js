const getAdm = (map) => {
    let admList = []
    for([key, value] of map) {
        if(value === 'adm') {
            admList.push(key)
        }
    }
    return admList
}

const user = new Map();

user.set('leo', 'user')
user.set('bia', 'adm')
user.set('caio', 'adm')

console.log(getAdm(user))