const loadingReducer = (state = true, action) => {
    switch (action.type) {
        case 'TRUE':
            return true
        case 'FALSE':
            return false
        default:
            return true
    }
}

export default loadingReducer;