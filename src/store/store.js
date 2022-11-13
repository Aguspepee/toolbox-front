import { createStore } from 'redux';
import loadingReducer from '../reducers/loading';

const store = () => createStore(
    loadingReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store