import { createStore } from 'redux';
import loadingReducer from '../reducers/loading';

const store = createStore(
    loadingReducer
)

export default store