const BASE_URL = 'exemplo'

const getUser = async () => {
    const data = await fetch(BASE_URL)
    return data.json()
}