import axios from "axios"
const instance = axios.create({
    baseURL: "http://localhost:3001/files/"
})

export function getData(fileName) {
    return instance.get(`data/?fileName=${fileName}`)
}

export function getList() {
    return instance.get(`list/`)
}
