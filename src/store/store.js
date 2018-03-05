import { createStore } from 'redux';
import reducer from '../redux/reducer';

// 创建store
let store = createStore(reducer);
export default store;