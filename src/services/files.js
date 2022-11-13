import instance from "../config/axios"

export function getData(fileName) {
    return instance.get(`data/?fileName=${fileName}`)
}

export function getList() {
    return instance.get(`list/`)
}
